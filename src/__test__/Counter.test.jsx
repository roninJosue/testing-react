import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import Counter from "../components/Counter";

test('clicking the + button should increment the counter', () => {
  render(<Counter></Counter>)
  fireEvent.click(screen.getByText('+'))

  expect(screen.getByTestId('counter-value').outerHTML).toMatch(/1/i)
})

test('clicking the - button should decrement the counter', () => {
  render(<Counter></Counter>)
  fireEvent.click(screen.getByText('-'))

  expect(screen.getByTestId('counter-value').outerHTML).toMatch(/-1/i)
})

test('clicking the "Show it" button should show the value',  async () => {
  render(<Counter></Counter>)
  fireEvent.click(screen.getByText('Show it'))

  await waitFor(() => {
    expect(screen.getByTestId('value-box').outerHTML).toMatch(/The current value is 0/i)
  })

})