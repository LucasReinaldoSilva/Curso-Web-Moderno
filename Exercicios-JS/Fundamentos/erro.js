function tratarErroELancar(erro) {
     //throw 10
     //throw true
     // throw 'mensagem'
     throw{
         nome: erro.name,
         msg: erro.message,
         date: new Date
     }
}

function imprimirNomeGritado() {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
        } catch (e) {
            tratarErroELancar (e)
        } finally {
            console.log('Final')
        }
}

const obj = { nome : 'Roberto'}
imprimirNomeGritado(obj)