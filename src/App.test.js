import React from 'react'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from "./App"


describe('App', () => {
	it('interactua con la store', () => {
		const prevent = jest.fn()
		const initialState = { desc: 'lala', cant: 150 }
		const reducer = jest.fn().mockReturnValue({
			finanzas: [initialState]
		})
		const store = createStore(reducer)
		const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider> 
		)

		const newDesc = 'lele'
		const newCant = '200'

		wrapper.find('input').at(0).simulate('change', {target:{value: newDesc}})
		wrapper.find('input').at(1).simulate('change', {target:{value: newCant}})
		wrapper.find('form').simulate('submit', {preventDefault: prevent})
		wrapper.find('button').at(1).simulate('click')

		const [a, ...rest] = reducer.mock.calls
		expect(rest).toEqual([
      [{ finanzas: [initialState] }, { type: 'AGREGAR', payload: { cant: Number(newCant), desc: newDesc } }],
      [{ finanzas: [initialState] }, { type: 'ELIMINAR', index: 0 }]
		])
		expect(wrapper.text().includes('lala')).toBeTruthy()
	})
})
