import {render, screen} from "@testing-library/react";
import Greeter from "../components/Greeter";

test('renders the greeter correctly without a name', () => {
  render(<Greeter />)
  const pElement = screen.getByText(/stranger/i)
  expect(pElement).toBeInTheDocument();
})

test('renders the greeter correctly with a name', () => {
  render(<Greeter name='Reynaldo' />)
  const pElement = screen.getByText(/Hello there Reynaldo/i)
  expect(pElement).toBeInTheDocument()
})