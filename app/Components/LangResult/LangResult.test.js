import 'react-native';
import React from 'react';
import { shallow } from 'enzyme'

import LangResult from './LangResult'

describe('LangResult', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LangResult />)
    })

    it('should exist', () => {
        expect(wrapper).toBeDefined();
    })
})