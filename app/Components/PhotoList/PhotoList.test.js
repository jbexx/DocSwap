import 'react-native';
import React from 'react';
import { shallow } from 'enzyme'

import PhotoList from './PhotoList'

describe('PhotoList', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PhotoList />)
    })

    it('should exist', () => {
        expect(wrapper).toBeDefined();
    })
})