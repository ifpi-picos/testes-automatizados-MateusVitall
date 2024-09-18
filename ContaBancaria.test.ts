import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

describe("Teste de classe ContaBancaria", () => {
    let conta: ContaBancaria
    let contaDois: ContaBancaria
    beforeEach(() => {
        conta = new ContaBancaria()
        contaDois = new ContaBancaria
    })

    test("Método Depositar", () => {

        expect(conta.depositar(50)).toBe(50)
    })

    test("Método Depositar - deposito inválido", () => {
        expect(() => conta.depositar(-10)).toThrow("Valor inválido")
    })

    test("Método Sacar", () => {
        conta.depositar(50)
        expect(conta.sacar(10)).toBe(40)
    })

    test("Método Sacar - saque inválido", () => {
        conta.depositar(50)
        expect(() => conta.sacar(60)).toThrow("Valor inválido")
    })

    test("Método tranferir", () => {
        conta.depositar(500)
        expect(conta.transferir(200, contaDois)).toBe(300)
    })

    test("Método tranferir - Valor Inválido", () => {
        expect(() => conta.transferir(200, contaDois))
            .toThrow("valor inválido ou saldo insuficiente")
    })

    test("Método Saldo", () => {
        conta.depositar(10)
        expect(conta.consultarSaldo()).toBe(10)
    })

    test("Método exibir extrato", () => {
        conta.depositar(110)
        conta.sacar(53)
        expect(conta.exibirExtrato()).toBe("1. Depósito de R$ 110.00\n2. Saque de R$ 53.00")
        })
})