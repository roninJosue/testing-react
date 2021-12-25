import {render, screen} from '@testing-library/react';
import App from './App';

test('renders all buttons', () => {
  render(<App />);

  const upButton = screen.getByText('up', {exact: false})
  const dnButton = screen.getByText(/down/i)
  const printButton = screen.getByText(/^print$/i)

  expect(upButton).toBeInTheDocument()
  expect(dnButton).toBeInTheDocument()
  expect(printButton).toBeInTheDocument()
});
