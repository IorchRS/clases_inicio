
class Restaurante{
    constructor(nombre,direccion,telefono)
    {
    this.nombre=nombre;
    this.direccion=direccion;
    this.telefono=telefono;
    }
    
        darNombre()
        {
            return this.nombre;
        }
        mostrarNombre(nombre)
        {
            this.nombre=nombre;
        }
        
        darDireccion(){
            return this.direccion;
        }
        mostrarDireccion(direccion)
        {
            this.direccion=direccion;
        }
        darTelefono()
        {
            return this.telefono;
        }
        mostrarTelefono(telefono){
            this.telefono=telefono;
        }
    }
    
    function obtenerInfo(){
     
        
        let cuantos;
        let nombreRestaurante;
        let direccionRestaurante;
        let telefonoRestaurante;
      
        cuantos=Number(prompt("cuantos restauranes"));
        let arreglo = new Array([cuantos][2]);
        
        for(let i=0;i<cuantos; i++){
        for(let j=0;j<1;j++){   
        nombreRestaurante=prompt("dame el nombre del restaurante"+i);
         arreglo.push(nombreRestaurante[i][j]);
        direccionRestaurante=prompt("dame el direccion del restaurante00"+i);
        arreglo.push(direccionRestaurante[i][j+1]);
        telefonoRestaurante=prompt("dame el telefono del restaurante00"+i);
        arreglo.push(telefonoRestaurante[i][j+2]);
          }
         }
         /*for(i=0;i<cuantos; i++){
            for(j=0;j<1;j++){   
             alert(arreglo.some([i][j]));
             alert(arreglo[i][j+1]);
             alert(arreglo[i][j+2]);
              }
             }*/
             
         
    }
    
    
    
    