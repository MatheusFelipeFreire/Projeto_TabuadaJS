function verificar(){
    var res = document.getElementById('res')
    var num = document.getElementById('numb')
    if(num.value == 0 ){
        window.alert('[ERRO] Verifique os seus Dados!')
    }else{
        var n = Number(num.value)
        var v = 10
        for(var c = 1; c <= 10; c++ ){
            res.innerHTML += `${n} x ${c} = ${n*c} <br>`
        } 
    } 
}
