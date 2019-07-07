import React from 'react'
import { shallow } from 'enzyme'
import Finanzas from "./Finanzas"

describe('Finanzas', () => {
	it('eliminar finanza onClick', () => {
		const eliminarFinanza = jest.fn()
		const finanzas = [
			{ desc: 'Finanza 1', cant: 100 },
			{ desc: 'Finanza 2', cant: 200 }
		]
		const wrapper = shallow(<Finanzas 
			finanzas={finanzas}
			eliminarFinanza={eliminarFinanza}
			/>)
			
		wrapper.find('button').at(0).simulate('click')
		
		expect(eliminarFinanza).toHaveBeenCalledTimes(1)
		expect(eliminarFinanza).toHaveBeenCalledWith(0)
		expect(wrapper.text().includes('Finanza 1')).toBeTruthy()
		expect(wrapper.text().includes('Finanza 1')).toBeTruthy()
		expect(wrapper.find('tbody tr').at(0).find('td').at(0).text()).toEqual(finanzas[0].desc)
		expect(wrapper.find('tbody tr').at(1).find('td').at(0).text()).toEqual(finanzas[1].desc)
	})
})
