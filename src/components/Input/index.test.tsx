import React from 'react';
import { shallow } from 'enzyme';

import Input from './index';

test('Input renders', () => {
  const wrapper = shallow(<Input />);
  const component = wrapper.find('[data-test="component-input"]');
  expect(component.length).toBe(1);
});
