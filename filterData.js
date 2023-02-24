const input = document.getElementById('input');
const result2 = document.getElementById('result2');

input.addEventListener('input', () => {
    const worth = input.value.toLowerCase();
    const filteredData = pokemon.filter( data => data.name.english .indexOf(worth) > - 1);
    const fragment2 = document.createDocumentFragment();
    for(const dato of filteredData){
        fragment2.appendChild(generateElement(dato));
    }
    result2.appendChild(fragment2);
})

function generateElement(info){
    const span = document.createElement('span');
    span.innerHTML = `
    <b>id:</b> ${info.id}<br>
    <b>name:</b> ${info.name.english}<br>
    
    <b>type:</b> ${info.type}<br>

    `;
    return span;

}