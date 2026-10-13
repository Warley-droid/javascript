const ctr = document.querySelector('input#ctr')
ctr.addEventListener('click', contar)

function contar(){
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('p#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `[ERRO] Insira os dados  corretamente`
    }else{
        res.innerHTML = `Contando:<br>`

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            alert(`Passo inválido! Considere um passe maior do que 0`)
            p = 1
        }

        if (i < f){
            // Contagem crescente:
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
        }
        } else {
            // Contagem decrescente:
            for (let c = i; c > f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }
}