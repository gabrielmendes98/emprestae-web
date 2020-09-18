import * as React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

test('Home page renders', () => {
  const wrapper = shallow(<Home />);
  const page = wrapper.find('[data-test="page-home"]');
  expect(page.length).toBe(1);
});

test('If not signed in, show login and sign up actions', () => {
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    signed: false,
  }));

  const wrapper = shallow(<Home />);
  const link = wrapper.find('[data-test="link-login"]');
  expect(link.length).toBe(1);
});

test('If signed in, show go to profile action', () => {
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    signed: true,
  }));

  const wrapper = shallow(<Home />);
  const link = wrapper.find('[data-test="link-see-profile"]');
  expect(link.length).toBe(1);
});
