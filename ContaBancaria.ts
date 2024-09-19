export default class ContaBancaria {
    private numeroConta: number
    private agencia: number
    private saldo: number
    private extrato: string[]


    public constructor() {
        this.numeroConta = Math.floor(Math.random()
        * 900000000) + 100000000
        this.numeroConta = 0
        this.agencia = 0
        this.saldo = 0
        this.extrato = []
    }


    public depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor
            let descricao =`Depósito de R$ ${valor.toFixed(2)}`
            this.registrarOperacao(descricao)
            return this.saldo
        } else {
            throw new Error("Valor inválido")
        }

    }

    public sacar(valor: number) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor
            let descricao =`Saque de R$ ${valor.toFixed(2)}`
            this.registrarOperacao(descricao)
            return this.saldo
        } else {
            throw new Error("Valor inválido")
        }

    }



    private receberTransferencia(valor: number, conta: ContaBancaria) {
        conta.saldo += valor
        let descricao=`Transferência de ${valor} recebida`
        conta.registrarOperacao(descricao)
    }

    public transferir(valor: number, conta: ContaBancaria) {
        if (valor > 0 && valor <= this.saldo) {
            conta.receberTransferencia(valor, conta)
            this.saldo -= valor
            let descricao = `Transferêcia de r$ ${valor} realizada.`
            this.registrarOperacao(descricao)
            return this.saldo
        } else {
            throw new Error("valor inválido ou saldo insuficiente")
        }
    }

    public consultarSaldo(){
        return this.saldo
    }

    public exibirExtrato(){
       let extratoString = " "

       this.extrato.forEach((operacao, index) => {
            extratoString += `${index + 1}. ${operacao}\n`
       })
       return extratoString.trim()
    }

    private registrarOperacao(descricao: string){
        let data: Date | string = new Date()
    data = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`

        descricao = `${descricao} - ${data}`
        this.extrato.push(descricao)
      
    }
}
