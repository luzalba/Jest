import {sumar, multiplicar, restar, dividir} from '../maths.js';
import { TestScheduler } from 'jest';
describe ('Calculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(2);
    })
    test('Multiplicar', () => {
        expect(multiplicar(2,2)).toBe(4);
    })
    test('Restar', () => {
        expect(restar(5,3)).toBe(2);
    })
    test('Dividir', () => {
        expect(dividir(10,2)).toBe(5);
    })
});