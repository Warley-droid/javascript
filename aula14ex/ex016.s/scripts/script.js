
const cnt = window.document.querySelector('input#cnt')
cnt.addEventListener('click', contar)

function contar() {
    const txtn1 = document.querySelector('input#txtn1')
    const txtn2 = document.querySelector('input#txtn2')
    const txtn3 = document.querySelector('input#txtn3')

    const res = document.querySelector('p#res')

    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)
    let n3 = Number(txtn3.value)

    res.innerHTML = ''

    if (n3 <= 0) {
        window.alert('Passo inválido! Considere um passo maior que zero.')
        return
    }

    if (n1 <= n2) {
        // Contagem crescente
        for (let c = n1; c <= n2; c += n3) {
            res.innerHTML += `${c} <br>`
        }
    } else {
        // Contagem decrescente
        for (let c = n1; c >= n2; c -= n3) {
            res.innerHTML += `${c} <br>`
        }
    }
}

