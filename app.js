const checkboxes = document.querySelectorAll(
    '.inbox input[type="checkbox"]'
);
let lastChecked;

function handleCheck(e) {
    let inBetween = false; // flag
    if (e.shiftKey && this.checked) {
        // Se a tecla shift estiver sendo pressionada e o elemento estiver sendo 'checado'.

        checkboxes.forEach((checkbox) => {
            if (checkbox === this || checkbox === lastChecked) {
                // Quando o elemento dentro do loop forEach for igual ao elemento clicado, alterar o valor da flag 'inBetween' para verdadeiro. E quando o elemento dentro desse mesmo loop for igual ao 2o - segundo momento que clicarmos sobre uma checkbox - valor de this (lastChecked), alterar o valor da flag para falso.
                inBetween = !inBetween; // Inverte o true/false
            }

            if (inBetween) {
                checkbox.checked = true; // Se o valor de 'inBetween' for verdadeiro, e não tiver sido checado ainda, atribuir o atributo de .checked para true.
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach((checkbox) =>
    checkbox.addEventListener('click', handleCheck)
);