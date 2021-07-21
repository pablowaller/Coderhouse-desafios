const socket = io.connect()

socket.on('mensajes',messages=>{
    
    renderMessages(messages)
})

window.addEventListener('load',()=>{

    let message = document.getElementById('chat-message')
    let email = document.getElementById('email')

    document.getElementById('chat-form')
        .addEventListener('submit',(e)=>{
            e.preventDefault()
            if( message.value == ''  || email.value == '' ){
                showError()
                return 
            }
            socket.emit('mensajes:nuevo',{email: email.value, message: message.value})
            message.value = ''
        })
})

function showError(){
            let errorElem = document.createElement('b')
            errorElem.id='chat-error'
            errorElem.style='display:block'
            errorElem.innerText = 'Debe ingresar un mensaje y un mail'
            errorElem.classList.add( 'text-danger')
            document.getElementById('chat-form').append(errorElem)
            setTimeout(()=>{ document.querySelector('#chat-error').remove()},2000)
}

function renderMessages(data){
    const container = document.getElementById('chat-container')

    const html = data.map(msg => `
        <div class="message">
        <strong class="text-primary">${msg.email}:</strong> 
        <span style="color:brown">${msg.date}</span> :
        <em class="text-success">${msg.message}</em>
    </div>
    `).join('')

    container.innerHTML = html

    //Muestra el final de chat
    container.scrollTop = container.scrollHeight;
    return false
}