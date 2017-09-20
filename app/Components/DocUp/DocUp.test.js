import 'react-native';
import React from 'react';
import DocUp from './DocUp'
import { shallow } from 'enzyme'


describe('DocUp', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<DocUp />)
    })

    it('should exist', () => {
        expect(wrapper).toBeDefined();
    })
})