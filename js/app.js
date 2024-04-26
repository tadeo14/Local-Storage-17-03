const handleUser = document.querySelector('#handleUser'); //traemos la etiqueta del html


handleUser.addEventListener('click', addUser); //esto lo utilizamos para llamar la funcion


function addUser() {
    const name = document.querySelector('#name');
    console.log(name.value);
}