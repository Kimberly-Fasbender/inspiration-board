// src/components/test/NewPetForm.test.js
import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <Card card={ { text: 'test', emoji: 'beer' } } onRemoveCallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
