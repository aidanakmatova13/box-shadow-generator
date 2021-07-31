const borderRadius = document.querySelector('.border-radius')
const box = document.querySelector('.box')
const offsetX = document.querySelector('.offsetX')
const offsetY = document.querySelector('.offsetY')
const blur = document.querySelector('.blur')
const spread = document.querySelector('.spread')
const shadowColor = document.querySelector('.shadowColor')
const colorBox = document.querySelector('.boxColor')
const out = document.querySelector('.out')
const outset = document.querySelector('.outset')
const inset = document.querySelector('.inset')

borderRadius.oninput = cssGenerator
offsetX.oninput = cssGenerator
offsetY.oninput = cssGenerator
blur.oninput = cssGenerator
spread.oninput = cssGenerator
shadowColor.oninput = cssGenerator
colorBox.oninput = cssGenerator
out.oninput = cssGenerator
outset.oninput = cssGenerator
inset.oninput = cssGenerator

function cssGenerator(){
    box.style.borderRadius = borderRadius.value + '%'
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
    box.style.backgroundColor = `${colorBox.value} ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`

    out.innerHTML = `Box-shadow:  ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} <br>`
    out.innerHTML += `- webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} <br>`
    out.innerHTML += `- mox-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
    if (outset.checked){
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
    } else {
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset`
    }
}
console.log(colorBox)
cssGenerator()