import React from "react"
import {render, screen, fireEvent} from "@testing-library/react";
import Counter from "../components/Counter";

describe('Counter component',() => {
  it('should increments count by one when up is clicked',  () => {
    render(<Counter />)

    fireEvent.click(screen.getByTestId('up'))

    let num = screen.getByText('1')

    expect(num).toBeInTheDocument()
  });

  it('should decrements count by one when down is clicked', () => {
    render(<Counter />)

    fireEvent.click(screen.getByTestId('up'))

    let num = screen.getByText('1')

    fireEvent.click(screen.getByTestId('down'))

    expect(num).not.toBeInTheDocument()
  });
})
