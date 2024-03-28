// Seleziona il container del contatore
const counterContainer = document.querySelector('.counter-container');

// Crea l'elemento h1 per visualizzare il contatore
const counterDisplay = document.createElement('h1');
counterDisplay.id = 'counter';
counterDisplay.textContent = '0';

// Crea il pulsante per incrementare il contatore
const incrementBtn = document.createElement('button');
incrementBtn.id = 'incrementBtn';
incrementBtn.textContent = '+';

// Crea il pulsante per decrementare il contatore
const decrementBtn = document.createElement('button');
decrementBtn.id = 'decrementBtn';
decrementBtn.textContent = '-';

// Aggiungi gli elementi al container del contatore
counterContainer.appendChild(counterDisplay);
counterContainer.appendChild(incrementBtn);
counterContainer.appendChild(decrementBtn);

// Aggiungi event listener per incrementare il contatore
incrementBtn.addEventListener('click', () => {
    // Ottieni il valore attuale del contatore e incrementalo
    let currentValue = parseInt(counterDisplay.textContent);
    currentValue++;
    // Aggiorna il contatore con il nuovo valore
    counterDisplay.textContent = currentValue;
});

// Aggiungi event listener per decrementare il contatore
decrementBtn.addEventListener('click', () => {
    // Ottieni il valore attuale del contatore e decrementalo
    let currentValue = parseInt(counterDisplay.textContent);
    if (currentValue>0){
        currentValue--;
    }
    // Aggiorna il contatore con il nuovo valore
    counterDisplay.textContent = currentValue;
});