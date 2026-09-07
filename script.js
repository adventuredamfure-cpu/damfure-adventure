
const nav=document.querySelector('.nav'), menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('inquiryForm').addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('name').value.trim(), contact=document.getElementById('contact').value.trim();
 const trip=document.getElementById('trip').value, msg=document.getElementById('message').value.trim();
 const text=`Hello Damfure Adventure!%0A%0AName: ${encodeURIComponent(name)}%0AContact: ${encodeURIComponent(contact)}%0AAdventure: ${encodeURIComponent(trip)}%0AMessage: ${encodeURIComponent(msg)}`;
 window.open('https://wa.me/9779745307830?text='+text,'_blank');
});
