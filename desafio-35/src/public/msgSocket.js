const socket = io.connect()


window.addEventListener('load',()=>{

    // Variables 

    let text = document.getElementById('chat-message')
    let email = document.getElementById('email')
    let nombre = document.getElementById('nombre')
    let apellido= document.getElementById('apellido')
    let edad = document.getElementById('edad')
    let avatar = document.getElementById('avatar')
    let alias = document.getElementById('alias')

    const messageForm = document.getElementById('chat-form')

    //Socket

    socket.on('mensajes', messages =>{
        console.info('Normalized:',messages)
        renderMessages(denormalizeData(messages))
    })

    //Eventos

    messageForm
        .addEventListener('submit',(e)=>{
            e.preventDefault()

            const message  = { 
                    author: 
                        { id: email.value,
                          nombre: nombre.value,
                          apellido: apellido.value,
                          edad: edad.value, 
                          alias:alias.value, 
                          avatar: avatar.value},
                    text: text.value
                    }

            if(text.value == '') return showError()
            socket.emit('mensajes:nuevo',message)
            text.value = ''
        })
})

//Funciones


function showCompression(normalize, denormalize){

    const size1 = JSON.stringify(normalize,0,null).length
    const size2 = JSON.stringify(denormalize,0,null).length
    console.info('sizeNormalized',size1)
    console.info('sizeDeNormalized',size2)
    // Retorna a cuanto equivale 
    const compression = (100 / size2 * size1).toFixed(2)

    console.log(compression)

    let compressionDiv = document.createElement('div')
    compressionDiv.id='compression'
    compressionDiv.style='position: fixed; z-index:2; font-size: 2rem'
    compressionDiv.innerText = `Compression: ${compression} %`
    compressionDiv.classList.add('bg-dark','text-light')

    document.getElementById('cont-compression').appendChild(compressionDiv)
    setTimeout(()=>{ document.querySelector('#compression').remove()},10000)
}

function denormalizeData(normalizedData){
    
    //schemas 
    const authorSchema = new normalizr.schema.Entity('authors',{},{ idAttribute: 'id'})
    const messageSchema = new normalizr.schema.Entity('messages',{
        author: authorSchema
    },{idAttribute: '_id'})
    
    const data = new normalizr.schema.Entity('data',{
        authors: [authorSchema],
        messages: [messageSchema]
    })

    //denormalized
    const denormalizedData = normalizr.denormalize(normalizedData.result,data, normalizedData.entities)

    showCompression(normalizedData,denormalizedData)

    console.info('denormalized',denormalizedData)
    return denormalizedData.messages
}


function showError(){
            let errorElem = document.createElement('b')
            errorElem.id='chat-error'
            errorElem.style='display:block'
            errorElem.innerText = 'Debe ingresar un mensaje y un mail'
            errorElem.classList.add( 'text-danger')

            document.getElementById('chat-form').append(errorElem)
            setTimeout(()=>{ document.querySelector('#chat-error').remove()},2000)

            return false
}

function renderMessages(data){
    console.info('rendering..',data)
    const container = document.getElementById('chat-container')

    const html = data.map(msg => `  
        <div class="message">
            <img src = "${msg.author.avatar}" width=50 height=50/> 
            <strong class="text-primary">${msg.author.alias}:</strong> 
            <small style="color:brown">${new Date(msg.date).toLocaleString()}</small> :
            <em class="text-success">${msg.text}</em>
        </div>
    `).join('')

    container.innerHTML = html

    //Muestra el final de chat
    container.scrollTop = container.scrollHeight;
    return false
}