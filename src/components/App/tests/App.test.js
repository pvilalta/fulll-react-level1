import React from 'react';
import { render } from '@testing-library/react';
import Component from '..';

describe('components | App | index', () => {
  test('should render component', () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });
});
