var monBouton = document.querySelector('button');
//var monTitre = document.querySelector('h1');
var monTitre = document.querySelector('h1');
monTitre.textContent = 'Encore Bonjour tout le monde!!';

function definirNomUtilisateur() {
  var monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Bonjour, ' + monNom;

if(!localStorage.getItem('nom')) {
  definirNomUtilisateur();
} else {
  var nomEnregistre = localStorage.getItem('nom');
  monTitre.textContent = 'Bonjour, ' + nomEnregistre;
}
}

monBouton.onclick = function() {
  definirNomUtilisateur();
}



var monImage = document.querySelector('img');
monImage.onclick = function() {
    var maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/Desert.jpg') {
      monImage.setAttribute ('src','images/Penguins.jpg');
    } else {
      monImage.setAttribute ('src','images/Desert.jpg');
    }
}

// /////////////////////////////////

