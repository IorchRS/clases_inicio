


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

function obtenerInfo() {
    let restaurant = new Restaurante();
  
    let nombreRestaurante;
    let direccionRestaurante;
    let telefonoRestaurante;
    
    nombreRestaurante=prompt("dame el nombre del restaurante00");
    
    restaurant.mostrarNombre(nombreRestaurante);

    direccionRestaurante=prompt("dame la direccion del restaurante");
     restaurant.mostrarDireccion(direccionRestaurante);
     telefonoRestaurante=prompt("dame el telefono del restaurante");
     restaurant.mostrarTelefono(telefonoRestaurante);
alert(restaurant.darNombre()+restaurant.darDireccion()+restaurant.darTelefono());
}




