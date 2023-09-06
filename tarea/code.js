//addEventListener en el submit para que este pendiente de lo que hara el usuario.
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); //Evita que se refresque la pagina automaticamente.

// Se crearon 3 constantes.
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

//JSON
    let data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
    };

// Se envian los datos con el metodo POST al servidor
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    })

//Se envian los datos
    .then(response => response.json()) // Se convierte a un json
    .then(data => {
        console.log('Registro aprobado!', data); // Se imprimen los datos en la consola.
        
    })
    .catch(error => {
        console.error('Registro rechazado', error); //Salta un error
    });
});
        
        