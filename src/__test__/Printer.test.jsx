import React from "react"
import {render, screen, fireEvent} from "@testing-library/react";
import Printer from "../components/Printer";

describe('Printer component', () => {

  describe('input field', () => {
    it('should render correctly', () => {
      render(<Printer/>)

      expect(screen.getByPlaceholderText('Type a message!')).toBeInTheDocument()
    });

    it('should update on change', () => {
      render(<Printer/>)

      const message = screen.getByPlaceholderText('Type a message!', {})

      fireEvent.change(message, {target: {value: 'hello world'}})

      expect(message.value).toBe('hello world')
    });
  })
})

describe('print button', () => {
  describe('with data inside the message', () => {
    it('should prints the message to the screen', ()=> {
      render(<Printer />)

      const mssgInput = screen.getByPlaceholderText('Type a message!')

      fireEvent.change(mssgInput, {target: {value: 'hello world'}})
      fireEvent.click(screen.getByRole('button'))

      const message = screen.getByText('hello world')

      expect(message).toBeInTheDocument()
    });

    it('is not disabled', function () {
      render(<Printer />)

      const mssgInput = screen.queryByPlaceholderText('Type a message!')

      fireEvent.change(mssgInput, {target: {value: 'hello world'}})

      const btn = screen.getByRole('button')

      expect(btn).not.toBeDisabled()
    });

  })

  describe('without data inside the message', () => {
    it('is disabled', function () {
      render(<Printer />)

      const btn = screen.getByRole('button')

      expect(btn).toBeDisabled()
    });
  })
})
