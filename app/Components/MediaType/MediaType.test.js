import 'react-native';
import React from 'react';
import { shallow } from 'enzyme'

import MediaType from './MediaType'

describe('MediaType', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MediaType />)
    })

    it('should exist', () => {
        expect(wrapper).toBeDefined();
    })
})