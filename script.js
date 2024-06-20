function processData() {
    const input = document.getElementById('userInput').value;
    const outputDiv = document.getElementById('outputText');
    
    if (input) {
        outputDiv.textContent = `Você digitou: ${input}`;
    } else {
        outputDiv.textContent = 'Por favor, insira algum dado.';
    }
}
