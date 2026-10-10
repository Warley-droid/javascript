const ver = window.document.querySelector('input#ver')
ver.addEventListener('click', verificar)

function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = window.document.querySelector('input#txtano')
    const res = window.document.querySelector('div#res')
    const foto = window.document.querySelector('img#foto')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique seus dados')
    } else {
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        let genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade < 10) {
                foto.src = 'imagens/homem-crianca (1).jpg'
                res.innerHTML = `Detectamos um homem com ${idade} anos de idade`
            } else if (idade < 21) {
                foto.src = 'imagens/homem-jovem (1).jpg'
                res.innerHTML = `Detectamos um homem com ${idade} anos de idade`
            } else if (idade < 50) {
                foto.src = 'imagens/homem-adulto (1).jpg'
                res.innerHTML = `Detectamos um homem com ${idade} anos de idade`
            } else {
                foto.src = 'imagens/homem-idoso (1).jpg'
                res.innerHTML = `Detectamos um homem com ${idade} anos de idade`
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade < 10) {
                foto.src = 'imagens/mulher-crianca (1).jpg'
                res.innerHTML = `Detectamos uma mulher com ${idade} anos de idade`
            } else if (idade < 21) {
                foto.src = 'imagens/mulher-jovem (1).jpg'
                res.innerHTML = `Detectamos uma mulher com ${idade} anos de idade`
            } else if (idade < 50) {
                foto.src = 'imagens/mulher-adulta (1).jpg'
                res.innerHTML = `Detectamos uma mulher com ${idade} anos de idade`
            } else {
                foto.src = 'imagens/mulher-idosa (1).jpg'
                res.innerHTML = `Detectamos uma mulher com ${idade} anos de idade`
            }
        }
    }
}