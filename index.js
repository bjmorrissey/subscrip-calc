const submitBtn= document.getElementById('submitButton')
const inputText = document.querySelector('.typeinput')
const calcedArea = document.querySelector('.calculatedArea')
const displayArea = document.querySelector('.displayArea')
const fontSize = document.getElementById('fontSize')

let preInput = "";
let newString = "";
let ftSz= 8;

submitBtn.addEventListener('click', e => {
    e.preventDefault(); 
    newString = stringCalc(preInput);
    calcedArea.innerText = newString;
    displayArea.innerHTML = newString;
    
})

fontSize.addEventListener('change', e => {
    ftSz = fontSize.value;
    console.log(ftSz)
})

inputText.addEventListener('keyup', e => {
    preInput = inputText.value;
})


const charCalc = (char) => {
    let htmlCode = "&#"
    htmlCode += char.charCodeAt(0)
    return htmlCode
}

const stringCalc = (chars) => {
    let calcString = ''; 
    // calcString = '<td>'; 
    let arr = chars.split('')
    let ascii = [];
    arr.forEach(char => {
        let charCode = char.charCodeAt(0)
        ascii.push(charCode)

        if (charCode >= 32 && charCode <= 122) {
            calcString += char
        } else if (charCode === 169 || charCode === 174 || charCode === 8224 || charCode === 9674) {
            calcString += `<sup style="font-size: ${ftSz}px">&#${char.charCodeAt(0)}</sup>`
        
        } else if (charCode === 163 || charCode === 128 || charCode === 8364) {
            calcString += `<span style="font-size: ${ftSz}">&#${char.charCodeAt(0)}</span>`
        }else if (charCode === 10) {
            calcString += `<br />`
        }
        else {
            calcString += `&#${char.charCodeAt(0)}`
        }
    })
    console.log(calcString)
    
   return calcString;
   
}

