import 'react-native';
import React from 'react';
import { shallow } from 'enzyme'

import Verify from './Verify'
import Camera from 'react-native-camera'


describe('Verify', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Verify />)
    })

    it('should exist', () => {
        expect(wrapper).toBeDefined();
    })
})