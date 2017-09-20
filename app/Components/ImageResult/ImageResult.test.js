import 'react-native';
import React from 'react';
import { shallow } from 'enzyme'

import ImageResult from './ImageResult'

describe('ImageResult', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ImageResult />)
    })

    it('should exist', () => {
        expect(wrapper).toBeDefined();
    })
})