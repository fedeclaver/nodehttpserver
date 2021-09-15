const express = require('express')
const handlebars = require('express-handlebars')

const Productos = require('../datos/productos.js')

const prod = new Productos()
const PORT = 3030

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))



app.set("view engine", "ejs");
app.set("views", "./views");


app.get('/productos', (req, res) => {
    const prods = prod.listar()
    console.log(prods);
    res.render("datos", {       
        productos: prods
    });
});


app.post('/productos', (req, res) => {
    const producto = req.body
    prod.guardar(producto)
    res.redirect('/')
})

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

