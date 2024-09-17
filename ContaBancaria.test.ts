import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

describe("Teste de classe ContaBancaria", () => {
    let conta: ContaBancaria = new ContaBancaria
    beforeEach(() => {
        conta = new ContaBancaria()
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
})


