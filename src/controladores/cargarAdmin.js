
const{User}=require('../db.js')



const arrObj=[
    {
    email:'leorodr4446@gmail.com',
    first_name:'leonardo', 
    last_name:'rodriguez',
    functions:'admin'

    },
    {
    email:'mauricio_bo@hotmail.com',
    first_name:'mauricio', 
    last_name:'bo',
    functions:'admin',
    password: '123456',
    },
    {
    email:'berrfarias@gmail.com',
    first_name:'bernardo', 
    last_name:'farias',
    functions:'admin'
    
    },
    {
    email:'luisenriquegrosso@gmail.com',
    first_name:'luis', 
    last_name:'grossol',
    functions:'admin'
        
    },    
    {
    email:'algunocualquiera@gmail.com',
    first_name:'pablito',
    last_name:'marmol',
    password: '123456',    
    },
    {
    email:'leojg@gmail.com',
    first_name:'leopoldo',
    last_name:'perez',
    functions:'admin'    
    }
]

function cargarUsuario(arrObj){

    arrObj.map(async(e)=>{
        await User.findOrCreate({
            where:{
            email:e.email,
            first_name:e.first_name,
            last_name:e.last_name,
            functions:e.functions?e.functions:'usuario'}
        })
    })


}
module.exports={cargarUsuario,arrObj}