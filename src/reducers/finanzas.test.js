import reducer, { agregar, eliminar } from './finanzas'

describe('Finanzas Duck', ()  => {
	describe('Action Creators', () => {
		it('agregar', () => {
			const resultado = agregar(1)
			expect(resultado).toEqual({
				type: 'AGREGAR',
				payload: 1
			})
		})

		it('eliminar', () => {
			const resultado = eliminar(1)
			expect(resultado).toEqual({
				type: 'ELIMINAR',
				index: 1
			})
		})
	})
	
	describe('reducer', () => {
		it('AGREGAR', () => {
			const initialState = [1]
			const resultado = reducer(initialState, {
				type: 'AGREGAR',
				payload: 2
			})
	
			expect(resultado).toEqual([1, 2])
		})

		it('ELIMINAR', () => {
			const initialState = [1, 2, 3]
			const resultado = reducer(initialState, {
				type: 'ELIMINAR',
				index: 0
			})
			
			expect(resultado).toEqual([2, 3])
		})

		it('DEFAULT', () => {
			const initialState = [1, 2, 3]
			const resultado = reducer(initialState, {
				type: 'DEFAULT'
			})
			
			expect(resultado).toEqual(initialState)
		})
	})
})