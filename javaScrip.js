document.addEventListener("DOMContentLoaded", function(event) { 

    // Uses sharer.js 
    //  https://ellisonleao.github.io/sharer.js/#twitter  
       var shareUrl = window.location.href;
       var shareTitle = document.title;
       var shareSubject = "Read this good article";
       var shareImage = "yourTwitterUsername";
       var shareDescription = "yourTwitterUsername";
    
    
    //facebook
    $('#share-fb').attr('data-url', shareUrl).attr('data-sharer', 'facebook');
    //twitter
    $('#share-tw').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-sharer', 'twitter');
    //linkedin
    $('#share-li').attr('data-url', shareUrl).attr('data-sharer', 'linkedin');

      // email
      $('#share-em').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-subject', shareSubject).attr('data-sharer', 'email');
    window.Sharer.init();
    
    
    });


var correo = document.querySelector('#emailCont');
var nombre = document.querySelector('#nombCont');
var numero = document.querySelector('#celCont');
var botonCont = document.querySelector('#botonCont');
var form = document.querySelector('#contacto');
var valida = true;

botonCont.addEventListener('click', function(event){
  event.preventDefault();
  var alerta = document.querySelectorAll('.alert');
  for (var i = 0; i < alerta.length; i++) {
    alerta[i].remove();
  }
  if(/[A-z][A-z-\.0-9]+[@][A-z-0-9]+(\.[A-z]{2,})+/.test(correo.value)){
    validar(correo);
  }else{
    error(correo);
  }
  if (/[\w']+/.test(nombre.value)) {
    validar(nombre);
  }else{
    error(nombre);
  }
  if (/[\d]{4}[-][\d]{7}/.test(numero.value)) {
    validar(numero);
  }else {
    error(numero);
  }

  if (valida) {
    form.submit();
    window.alert('Mensaje Enviado, Gracias por su Tiempo.');
  }
});

function validar(vari){
  var div = document.createElement('div');
  div.className = 'alert alert-success';
  div.innerHTML = 'Campo Correcto';
  vari.parentElement.appendChild(div);
}
function error(vari){
  var div = document.createElement('div');
  div.className = 'alert alert-danger';
  div.innerHTML = vari.getAttribute('error');
  vari.parentElement.appendChild(div);
  valida = false;
}


var usuarios = localStorage.getItem("usuarios");
var log = document.querySelector('#log');
var user = document.querySelector('#user');
var pass = document.querySelector('#pass');
var wel = document.querySelector('#wel');
sesion();
if (usuarios === null  || usuarios === undefined) {
  usuarios = {};
} else {
  usuarios = JSON.parse(usuarios);
}
log.addEventListener('click', function(){
  console.log(user.value);
  console.log(pass.value);
  if (usuarios[user.value] !== undefined && usuarios[user.value].password == pass.value) {
    window.alert('Bienvenido, '+ user.value);
    $('#myModal').modal('hide');
    sessionStorage.setItem('user',user.value);
    sesion();
  }else {
    window.alert('Usuario y/o Contraseña Incorrectos');
  }
});

function sesion(){
  if (sessionStorage.getItem('user') !== null) {
    document.querySelector('#reg').remove();
    document.querySelector('#ini').remove();
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.innerHTML = 'Bienvenido, '+ sessionStorage.getItem('user');
    wel.appendChild(li);
    li.appendChild(a);
  }
}

