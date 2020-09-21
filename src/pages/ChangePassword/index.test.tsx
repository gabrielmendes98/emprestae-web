import React from 'react';
import { shallow } from 'enzyme';

import ChangePassword from './index';

test('Change password page renders', () => {
  const wrapper = shallow(<ChangePassword />);
  const page = wrapper.find('[data-test="page-change-password"]');
  expect(page.length).toBe(1);
});

test('Api called when submit form', () => {
  // Nao consegui implementar
});
