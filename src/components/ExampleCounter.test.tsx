import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExampleCounter from './ExampleCounter';

describe('Counter', () => {
  it('renders the Counter without crashing', () => {
    render(<ExampleCounter text="increment" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('can increment by clicking the button', async () => {
    const user = userEvent.setup();
    render(<ExampleCounter text="increment" />);

    await user.click(screen.getByRole('button'));
    await user.click(screen.getByRole('button'));

    expect(screen.getByRole('heading')).toHaveTextContent('2');
  });
});
