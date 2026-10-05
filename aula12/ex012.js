const agora = new Date()
const hora = agora.getHours()
    if (hora<12){
        console.log(`Olá, Bom dia! agora são exatamente ${hora} horas`)
    }else if (hora<18){
        console.log(`Olá, Boa tarde! agora são exatamente ${hora} horas`)
    }else if (hora<24){
        console.log(`Olá, Boa noite! agora são exatamente ${hora} horas`)
    }else {
    console.log(`Olá! O horário mencionado não existe`)
    }