
window.addEventListener('load',()=>{
    const socket = io.connect()
    const form = document.querySelector('form')
    
    // Template en handlebars
    var template = Handlebars.compile(`<div class="jumbotron bg-success">
    <h1 class="text-light">Vista de Productos</h1>
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
        <h3 class="alert bg-dark text-light">No se encontraron productos</h3>
    {{/if}}
    </div>`)
    
    
    socket.on('productos',productos =>{
        var HTML = template({productos:productos,hayProductos: productos.length ? true : false })
        console.log(productos)
        document.querySelector('#productos').innerHTML = HTML
    })

    //Al hacer submit emito el producto a guardar. 
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const producto = {
            title : document.getElementsByName('title')[0].value,
            price :  document.getElementsByName('price')[0].value,
            thumbnail :  document.getElementsByName('thumbnail')[0].value,
        }
        socket.emit('producto:guardar',producto)
        form.reset()

    })
    
    
    
    
})

