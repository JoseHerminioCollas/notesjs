import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import A from 'goatstone/ui/a.js'

describe('React Component A', function () {
    it('should have one child', function () {
        const wrapper = shallow(<A />)
        expect(wrapper.children().length).to.equal(1)
    })
    it('allows us to set props', () => {
        const wrapper = mount(<A bar="baz" />)
        expect(wrapper.props().bar).to.equal('baz')
        wrapper.setProps({ bar: 'foo' })
        expect(wrapper.props().bar).to.equal('foo')
    })
    it('renders the title', () => {
        const wrapper = render(<A title="unique" />)
        expect(wrapper.text()).to.contain('unique')
    })
})
