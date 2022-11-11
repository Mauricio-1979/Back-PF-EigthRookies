const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const{CargarTodo}=require('./src/controladores/cargaProductosBDv1')
const{cargarUsuario,arrObj}=require('./src/controladores/cargarAdmin')
const {Category} = require('./src/db.js')
const PORT = process.env.PORT || 3001

  conn.sync().then(() => {
  server.listen(PORT, async () => { 
    console.log('%s listening at ', PORT); // eslint-disable-line no-console

    const project = await Category.findOne({ where: { id: 1 } });
    if (project === null) {
      CargarTodo();
      cargarUsuario(arrObj);
    } else {
      console.log("All carged"); // true
  
    }

  });
});
