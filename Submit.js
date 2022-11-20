
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_oso21uh';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Enviar';
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El mensaje fue enviado!',
        showConfirmButton: false,
        timer: 1500
    });
    }, (err) => {
    btn.value = 'Enviar';
    alert(JSON.stringify(err));
    });
});

    



// emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//     btn.value = 'Enviar';
//     alert('Sent!');
//     }, (err) => {
//     btn.value = 'Enviar';
//     alert(JSON.stringify(err));
//     });
// });
// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault();
// btn.addEventListener('click', (e) =>{
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'El mensaje fue enviado!',
//         showConfirmButton: false,
//         timer: 1500
//     })
//     e.preventDefault();
// })
