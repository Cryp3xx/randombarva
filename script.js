document.addEventListener('DOMContentLoaded', (event) => {
    const generateColorBtn = document.getElementById('generateColorBtn');
    const saveColorBtn = document.getElementById('saveColorBtn');
    const colorList = document.getElementById('colorList');

    let currentColor = '';

    function generateRandomColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        currentColor = randomColor;
        saveColorBtn.disabled = false;
    }

    function saveFavoriteColor() {
        const listItem = document.createElement('li');
        
        const colorSample = document.createElement('span');
        colorSample.style.backgroundColor = currentColor;
        colorSample.textContent = currentColor;
        colorSample.className = 'colorSample';
        
        const selectBtn = document.createElement('button');
        selectBtn.textContent = 'Vybrat';
        selectBtn.onclick = () => {
            document.body.style.backgroundColor = colorSample.textContent;
        };
        
        listItem.appendChild(colorSample);
        listItem.appendChild(selectBtn);
        colorList.appendChild(listItem);
    }

    generateColorBtn.addEventListener('click', generateRandomColor);
    saveColorBtn.addEventListener('click', saveFavoriteColor);
});