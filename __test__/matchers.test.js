import { TestScheduler } from "jest"

describe('Comparadores comunes', () => {
    const user = {
        name: "luzdelia",
        lastname: "alba"
    }
    const user2 = {
        name: "luzdelia",
        lastname: "alba"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2)
    })
    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2)
    })
})