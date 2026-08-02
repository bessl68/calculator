const result = document.getElementById('result');
const buttonsGrid = document.getElementById('buttonsGrid');
const clearBtn = document.getElementById('clearBtn');
const resultBtn = document.getElementById('resultBtn');

buttonsGrid.addEventListener('click', (event) => {
    if (!event.target.matches('button')) return;
    
    const clickedButton = event.target
    
    if (clickedButton === clearBtn) {
        result.textContent = '';
    } else if (clickedButton === resultBtn) {
        if (result.textContent.trim() === '') return;
        
        try {
            result.textContent = Function(`'use strict'; return (${result.textContent})`)();
        } catch {
            result.textContent = 'Error';
        }
    } else {
        if (result.textContent === 'Error') {
            result.textContent = '';
        }
        result.textContent += clickedButton.textContent;
    }
});
