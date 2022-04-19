const Pizzas = [{
    Id: 1,
    Nombre: 'Margarita',
    Ingredientes: ['salsa', 'queso', 'albahaca', 'aceite de oliva',],
    Precio: 750,
    },{
    Id: 2,
    Nombre: 'Peperoni',
    Ingredientes: ['salsa', 'queso', 'peperoni', ' aceitunas',],
    Precio: 1150,
    },{
    Id: 3,
    Nombre: 'Capresse',
    Ingredientes: ['salsa', 'queso', 'tomate', 'albahaca', 'aceite de oliva',],
    Precio: 900,
    },{
    Id: 4,  
    Nombre: 'Muzzarela',
    Ingredientes: ['salsa', 'queso', 'aceite de olvia', 'aceitunas',],
    Precio: 450,
    },{
    Id: 5,
    Nombre: 'Carne y Huevo',
    Ingredientes: ['salsa', 'queso', 'carne', 'aceitunas', 'huevos fritos'],
    Precio: 1250,
    },{
    Id: 6,
    Nombre: 'Jamón',
    Ingredientes: ['salsa', 'queso', 'jamon', 'aceite de oliva', 'aceitunas',],
    Precio: 550,
    },
]
 



const IdImpar = Pizzas.filter(element => element.Id % 2 !== 0).map(item=>item.Nombre)
console.log('Las pizzas con Id impar, son: ', IdImpar.join(', ')+'.')

const Importe = Pizzas.filter(element => element.Precio < 600).map(item => item.Nombre)
console.log('Hay dos pizzas con un importe menor a $600. Son: ', Importe.join(', ')+'.')


const ListaPizzas = Pizzas.map(element => element.Nombre)
console.log('Lista de Pizzas disponibles:', ListaPizzas.join(', ')+'.')


const Precios = Pizzas.map(element => element.Precio)
console.log('Precios: ' + '$' + Precios.join(', $')+'.')


const Nombre = Pizzas.map(element=>element.Nombre + ' $' + element.Precio)
console.log('Menú:', Nombre.join(', ')+'.')

