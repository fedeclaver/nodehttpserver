class Productos {
    constructor() {
        this.productos = []
        this.id = 0
    }




    guardar(productos) {
        const add = { ...productos, id: ++this.id }
        this.productos.push(add)
        return add
    }

  
    listar() {
        return [...this.productos]
    }

    
}

module.exports = Productos
