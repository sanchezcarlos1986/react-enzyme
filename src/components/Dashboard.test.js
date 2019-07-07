import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from "./Dashboard"

describe('Dashboard', () => {
	it('muestra valor', () => {
		const wrapper = shallow(<Dashboard valor={200} />)
		expect(wrapper.find('strong').text()).toEqual('200')
	})
})
