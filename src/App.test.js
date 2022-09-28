import {render, screen} from '@testing-library/react';
import App from './App';

test('renders all buttons', () => {
  render(<App />);

  const upButton = screen.getByText('+', {exact: false})
  const dnButton = screen.getByText('-')
  const printButton = screen.getByText(/^print$/i)

  expect(upButton).toBeInTheDocument()
  expect(dnButton).toBeInTheDocument()
  expect(printButton).toBeInTheDocument()
});
