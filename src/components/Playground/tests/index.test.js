/* eslint-disable testing-library/await-async-utils */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Component from '..';

describe('components | Playground | index', () => {
  test('should render component', async () => {
    const items = Array.from({ length: 4 }, (_, index) => index);

    const { container } = render(<Component items={items} />);
    const checkbox = screen.getByTestId('item-0');

    expect(container).toMatchSnapshot();
    waitFor(() => expect(checkbox).toBeInTheDocument());
    waitFor(() => expect(checkbox).not.toBeChecked());
  });

  test('should toggle input by ticking checkbox', () => {
    const items = Array.from({ length: 4 }, (_, index) => index);

    render(<Component items={items} />);
    const checkbox = screen.getByTestId('item-0');

    userEvent.click(checkbox);
    waitFor(() => expect(checkbox).toBeChecked());

    userEvent.click(checkbox);
    waitFor(() => expect(checkbox).not.toBeChecked());
  });

  test('should toggle select all input by ticking every checkboxes', () => {
    const items = Array.from({ length: 4 }, (_, index) => index);

    render(<Component items={items} />);

    const selectAllCheckbox = screen.getByTestId('selectAll');
    const checkboxes = items.map(elem => screen.getByTestId(`item-${elem}`));

    checkboxes.every(elem => userEvent.click(elem));
    waitFor(() => expect(selectAllCheckbox).toBeChecked());

    userEvent.click(selectAllCheckbox);
    waitFor(() => checkboxes.every(elem => expect(elem).not.toBeChecked()));
  });
});
