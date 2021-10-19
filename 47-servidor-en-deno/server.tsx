// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { contentTypeFilter, createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();

let colors :string[] = []

app.post(
    '/',
    contentTypeFilter("application/x-www-form-urlencoded"),
    async(req : any ) => {
      const bodyForm = await req.formData()
      console.log(bodyForm.value("color"))
      colors.push(bodyForm.value("color"))
})

const styleForm = {
    backgroundColor: 'black',
    width:"80vw",
    color:"white"
    }


app.handle("/", async (req : any) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>
          <form action="/" method="POST">
            <label>Color:</label>
            <input type="text" name="color"/>
            <button type="submit">Enviar</button>
          </form>
          <ul  style={styleForm} >
            { colors.map((color ) => 
              <li key={color} style={ {color:`${color }`}}>{ color }</li> ) }
          </ul>

        </body>
        
      </html>
    ),
  }); 
});


app.listen({ port: 8899 });