import React from 'react'
import { shallow } from 'enzyme'
import Form from "./Form"

describe('Form', () => {
	it('agrega finanza', () => {
		const agregarFinanza = jest.fn()
		const prevent = jest.fn()
		const wrapper = shallow(<Form agregarFinanza={agregarFinanza} />)

		wrapper.find('input').at(0).simulate('change', {target:{value:'descripción'}})
		wrapper.find('input').at(1).simulate('change', {target:{value:'150'}})
		wrapper.find('form').simulate('submit', {preventDefault: prevent})

		expect(agregarFinanza).toHaveBeenCalledTimes(1)
		expect(prevent).toHaveBeenCalledTimes(1)
		expect(agregarFinanza).toHaveBeenCalledWith({ desc: 'descripción', cant: 150 })
	})
})
