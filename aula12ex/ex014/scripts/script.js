function carregar(){
    const msg = window.document.querySelector('div#msg')
    const img = window.document.querySelector('img#imagem')

    const data = new Date()
    const hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // Bom dia!
        img.src = 'imagens/amanhecer.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <= 18){
        // Doa tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        // Boa noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
}