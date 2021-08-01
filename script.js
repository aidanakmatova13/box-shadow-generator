const borderRadius = document.querySelector('.border-radius')
const box = document.querySelector('.box')
const offsetX = document.querySelector('.offsetX') //сдвиг по оси x
const offsetY = document.querySelector('.offsetY') //сдвиг по оси y
const blur = document.querySelector('.blur') //за размытие
const spread = document.querySelector('.spread') //добавляет толщину
const shadowColor = document.querySelector('.shadowColor')
const boxColor = document.querySelector('.boxColor')
const out = document.querySelector('.out')
const outset = document.querySelector('.outset')
const inset = document.querySelector('.inset')

borderRadius.oninput = cssGenerator //навешываем функцию
offsetX.oninput = cssGenerator
offsetY.oninput = cssGenerator
blur.oninput = cssGenerator
spread.oninput = cssGenerator
shadowColor.oninput = cssGenerator
boxColor.oninput = cssGenerator
out.oninput = cssGenerator
outset.oninput = cssGenerator
inset.oninput = cssGenerator

function cssGenerator(){
    box.style.borderRadius = borderRadius.value + '%'
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
    box.style.backgroundColor = `${boxColor.value}`

    out.innerHTML = `Box-shadow:  ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} <br>`
    out.innerHTML += `- webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} <br>`
    out.innerHTML += `- mox-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
    if (outset.checked){
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
    } else {
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset`
    }
}
cssGenerator()