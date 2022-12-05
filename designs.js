// Select color input
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas')

// Select size input
const heightEl = document.getElementById('inputHeight');
const widthEl = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker')
form.addEventListener('submit', function(evt){
    evt.preventDefault()
    makeGrid()
})


function makeGrid() {
    // Your code goes here!
    removeAllChildren()
    const rows = widthEl.value
    const cols = heightEl.value

    for(let i=0; i<rows; i++){
        const row = document.createElement('tr')
        
        for(let j =0; j<cols; j++){
            const cell = document.createElement('td')
            cell.addEventListener('click', ()=>{
                cell.style.background = colorPicker.value
            })
            row.appendChild(cell)
        }
        table.append(row)
    }
}

function removeAllChildren(){
    while(table.firstChild){
        table.removeChild(table.firstChild)
    }
}
