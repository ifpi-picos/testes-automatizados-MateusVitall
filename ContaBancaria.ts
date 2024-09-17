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
            this.extrato.push(`Depósito de R$ ${valor.toFixed(2)}`)
            return this.saldo
        } else {
            throw new Error("Valor inválido")
        }

    }

}
