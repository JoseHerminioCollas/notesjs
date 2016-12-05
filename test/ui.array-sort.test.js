import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
const ArraySort = require('goatstone/ui/array-sort.js')
var shallowWrapper, fullWrapper
const expI = 0
const expMinI = 1
const expArray = [1, 2, 3, 4]

describe('ArraySort', () => {
    beforeEach(() => {
        sinon.stub(console, 'error', (warning) => { throw new Error(warning) })
        shallowWrapper = shallow(<ArraySort
            array={expArray}
            i={expI}
            minI={expMinI}
            style={require('goatstone/ui/style/container-element.js')}
            />)
        fullWrapper = mount(<ArraySort
            array={expArray}
            i={expI}
            minI={expMinI}
            style={require('goatstone/ui/style/container-element.js')}
        />)
    })
    afterEach(() => { console.error.restore() })
    it('should have at least two children', () => {
        expect(shallowWrapper.children().length).to.at.least(2)
    })
    it('should render without error', () => {
        shallow(<ArraySort
            array={expArray}
            i={expI}
            minI={expMinI}
            style={require('goatstone/ui/style/container-element.js')}
        />)
    })
    it('should have at least 2 style properties', () => {
        console.log(fullWrapper.find('div').length)
        expect(fullWrapper.find('[style]').length).to.at.least(2)
    })
    it('should have expected values for props', () => {
        const i = fullWrapper.props()
        expect(i.i).to.equal(expI)
        expect(i.minI).to.equal(expMinI)
        expect(i.array).to.eql(expArray)
    })
})
