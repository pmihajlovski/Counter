document.addEventListener('DOMContentLoaded', function () {
  // Ottieni riferimenti agli elementi HTML
  var counterElement = document.getElementById('counter');
  var incrementBtn = document.getElementById('incrementBtn');
  var decrementBtn = document.getElementById('decrementBtn');

  // Inizializza il valore del counter
  var counterValue = 0;

  // Aggiorna il valore del counter
  function updateCounter() {
      counterElement.textContent = counterValue;
  }

  // Gestisci l'evento di incremento
  incrementBtn.addEventListener('click', function () {
      counterValue++;
      updateCounter();
  });

  // Gestisci l'evento di decremento
  decrementBtn.addEventListener('click', function () {
      if (counterValue > 0) {
          counterValue--;
          updateCounter();
      }
  });

  // Inizializza il counter all'avvio della pagina
  updateCounter();
});