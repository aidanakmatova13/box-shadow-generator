const borderRadius = document.querySelector('.border-radius')
const box = document.querySelector('.box')
const offsetX = document.querySelector('.offsetX') //сдвиг по оси x
const offsetY = document.querySelector('.offsetY') //сдвиг по оси y
const blur = document.querySelector('.blur') //за размытие
const spread = document.querySelector('.spread') //растяжение
const shadowColor = document.querySelector('.shadowColor')
const boxColor = document.querySelector('.boxColor')
const out = document.querySelector('.out')
const outset = document.querySelector('.outset')
const inset = document.querySelector('.inset')
const borRadiusOut = document.querySelector('.borRadiusOut')
const offsetXOut = document.querySelector('.offsetXOut')
const offsetYOut = document.querySelector('.offsetYOut')
const blurOut = document.querySelector('.blurOut')
const spreadOut = document.querySelector('.spreadOut')

borderRadius.oninput = cssGenerator //навешываем функцию //навесим изменение
offsetX.oninput = cssGenerator
offsetY.oninput = cssGenerator
blur.oninput = cssGenerator
spread.oninput = cssGenerator
shadowColor.oninput = cssGenerator
boxColor.oninput = cssGenerator

out.oninput = cssGenerator
outset.oninput = cssGenerator
inset.oninput = cssGenerator
borRadiusOut.oninput = cssGenerator
offsetXOut.oninput = cssGenerator
offsetYOut.oninput = cssGenerator
blurOut.oninput = cssGenerator
spreadOut.oninput = cssGenerator

function cssGenerator(){
    box.style.borderRadius = borderRadius.value + '%'
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
    box.style.backgroundColor = `${boxColor.value}`
    borRadiusOut.textContent = `${borderRadius.value}px`
    offsetXOut.textContent = `${offsetX.value}px`
    offsetYOut.textContent = `${offsetY.value}px`
    blurOut.textContent = `${blur.value}px`
    spreadOut.textContent = `${spread.value}px`

    out.innerHTML = `box-shadow:  ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} <br>`
    out.innerHTML += `- webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} <br>`
    out.innerHTML += `- mox-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
    if (outset.checked){
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset`

        out.innerHTML = `box-shadow:  ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset <br>
- webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset <br>
- mox-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset`
    } else {
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
    }
}
cssGenerator() // вызов функции