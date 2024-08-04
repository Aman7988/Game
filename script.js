document.getElementById('spinButton').addEventListener('click', function() {
    const slot1 = Math.floor(Math.random() * 99);
    const slot2 = Math.floor(Math.random() * 99);
    const slot3 = Math.floor(Math.random() * 99);

    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    const resultElement = document.getElementById('result');
    const winImage = document.getElementById('winImage');
   

    resultElement.textContent = ''; // Clear previous result
    winImage.style.display = 'none'; // Hide win image
    

    if (slot1 === slot2 && slot2 === slot3) {
        document.getElementById('result').textContent = 'Jackpot! You won!';
            showWinImage();
            
    }
});


function showWinImage() {
    const winImage = document.getElementById('winImage');
    winImage.src = 'backgroundDefault.jpg'; // Path to your win image
    winImage.style.display = 'flex'; // Show win image
}


