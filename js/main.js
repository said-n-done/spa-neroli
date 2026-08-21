// Petit rappel visuel quand on clique sur "Reserver" depuis un mobile.
document.addEventListener('DOMContentLoaded', function () {
  var liens = document.querySelectorAll('a[href="contact.html"]');
  liens.forEach(function (lien) {
    lien.addEventListener('click', function () {
      window.sessionStorage.setItem('venu_de_reserver', '1');
    });
  });
});
