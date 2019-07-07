import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dashboard from "./Dashboard"

configure({ adapter: new Adapter() })

describe('Dashboard', () => {
	it('muestra valor', () => {
		const wrapper = shallow(<Dashboard valor={200} />)
		expect(wrapper.find('strong').text()).toEqual('200')
	})
})
