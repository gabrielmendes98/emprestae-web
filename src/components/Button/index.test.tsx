import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

test('Button renders', () => {
  const wrapper = shallow(<Button />);
  const component = wrapper.find('[data-test="component-button"]');
  expect(component.length).toBe(1);
});
