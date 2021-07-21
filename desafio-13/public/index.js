
window.addEventListener('load',()=>{
    const socket = io.connect()
    const form = document.querySelector('form')
    
    // Template en handlebars
    var template = Handlebars.compile(`
    <h4 class="text-light">Vista de Productos</h1>
    <br>
    
    {{#if hayProductos}} 
        <div class="table-responsive">
            <table class="table table-dark">
                <tr> <th>Nombre</th> <th>Precio</th> <th>Foto</th></tr>
                {{#each productos}}
                    <tr> <td>{{this.title}}</td> <td>$ {{this.price}}</td> <td><img width="50" src={{this.thumbnail}} alt="not found"></td> </tr>
                {{/each}}
            </table>
        </div>
    {{else}}  
        <span class="d-flex  alert bg-secondary text-light">No se encontraron productos</span>
    {{/if}}
    `)
    
    
    socket.on('productos',productos =>{
        var HTML = template({productos:productos,hayProductos: productos.length ? true : false })
        console.log(productos)
        document.querySelector('#productos').innerHTML = HTML
    })

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const producto = {
            title : document.getElementsByName('title')[0].value,
            price :  document.getElementsByName('price')[0].value,
            thumbnail :  document.getElementsByName('thumbnail')[0].value,
        }
        fetch('http://localhost:8080/api/productos/guardar',{ 
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(producto)
        }).then(res => {
            socket.emit('productos:update')
            form.reset()
        }).catch(err=> console.error(err))
        

    })
    
    
    
    
})

