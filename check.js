//geen inline styles gebruiken, toggle een class in de classlist
//geen inline javascript gebruiken, dus addEventListener ipv onclick in html
// gebruik document.querySelector ipv document.getElementById



var foutmelding = document.querySelector('.error'); 
var inloggen = document.querySelector('.login');


var check = function () {
    
if (document.querySelector("#username").value == "" || document.querySelector("#password").value == "") {

  foutmelding.classList.toggle('fout')
  foutmelding.innerHTML = 'Alle velden moeten ingevuld zijn';
} 
else {
  window.location='overzicht.html';  
}
};

inloggen.addEventListener('click', check);


/* zorgt dat de button in een form kan worden geplaatst */

var form = document.querySelector('#login');


form.addEventListener('submit', function (e) {
    e.preventDefault();
});