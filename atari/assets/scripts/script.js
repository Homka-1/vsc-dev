function evenNumbers(n){
     for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


console.log(evenNumbers(286))


// Получаем ссылку на элемент, куда будем выводить результат
const keyOutput = document.getElementById('keyOutput');

// Добавляем обработчик события для нажатия клавиши
document.addEventListener('keydown', function(event) {
    // Считываем код клавиши
    const keyPressed = event.key; // Выводит символ клавиши (например, 'a', 'Enter', 'Shift')
    
    // Выводим на экран
    keyOutput.textContent = `${keyPressed}`;
});