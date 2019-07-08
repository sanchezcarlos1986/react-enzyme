import { fetchUsuarios } from './usuarios' 

describe('Duck usuarios', () => {
	describe('fetchUsuarios', () => {
		it('success data', async () => {
			const dispatch = jest.fn()
			const getState = jest.fn()
			const services = {
				axios: {
					get: jest.fn().mockResolvedValue({
						data: 1
					})
				}
			}
			await fetchUsuarios()(dispatch, getState, services)
			// console.log(dispatch.mock.calls)
			expect(dispatch).toHaveBeenCalledWith({
				type: 'FETCH_USUARIOS_START',
				error: false
			})
			expect(dispatch).toHaveBeenCalledWith({
				type: 'FETCH_USUARIOS_SUCCESS',
				payload: 1
			})
		})

		it('error en el fetch', async () => {
			const dispatch = jest.fn()
			const getState = jest.fn()
			const services = {
				axios: {
					get: jest.fn().mockRejectedValue('fetchError!')
				}
			}
			await fetchUsuarios()(dispatch, getState, services)
			// console.log(dispatch.mock.calls)
			expect(dispatch).toHaveBeenCalledWith({
				type: 'FETCH_USUARIOS_START',
				error: false
			})
			expect(dispatch).toHaveBeenCalledWith({
				type: 'FETCH_USUARIOS_ERROR',
				payload: 'fetchError!',
				error: true
			})
		})
	})
})
