export default class ContaBancaria {
    private numeroConta: number
    private agencia: number
    private saldo: number
    private extrato: string[]


    public constructor() {
        this.numeroConta = 0
        this.agencia = 0
        this.saldo = 0
        this.extrato = []
    }


    public depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor
            this.extrato.push(`Depósito de R$ ${valor.toFixed(2)}`)
            return this.saldo
        } else {
            throw new Error("Valor inválido")
        }

    }

    public sacar(valor: number) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor
            this.extrato.push(`Saque de R$ ${valor.toFixed(2)}`)
            return this.saldo
        } else {
            throw new Error("Valor inválido")
        }

    }



    private receberTransferencia(valor: number, conta: ContaBancaria) {
        conta.saldo += valor
        conta.extrato.push(`Transferência de ${valor} recebida`)
    }

    public transferir(valor: number, conta: ContaBancaria) {
        if (valor > 0 && valor <= this.saldo) {
            conta.receberTransferencia(valor, conta)
            this.saldo -= valor
            this.extrato.push(`Transferêcia de r$ ${valor} realizada.`)
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
}
