import 'react-native';
import React from 'react';
import { shallow } from 'enzyme'

import Camera from './Camera';

describe('Camera', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Camera />)
    })

    it('should exist', () => {
        expect(wrapper).toBeDefined();
    })
})