function tabuada(){
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0){
        window.alert(`[ERRO] Digite um número`)
    }else{
        let c = 1
        tab.innerHTML = ``

        for (let n = Number(num.value); c <= 10; c++){

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}