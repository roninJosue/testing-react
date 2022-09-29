import {render, screen} from "@testing-library/react"
import fetchMock from "jest-fetch-mock"
import {act} from "react-dom/test-utils";
import APICall from "../components/APICall"

fetchMock.enableMocks()

beforeEach(() => {
  fetch.resetMocks()
})

test('it should render the message correctly', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    activity: "test"
  }))

  await act(async () => {
    render(<APICall></APICall>)
  })

  expect(screen.getByTestId('activity').outerHTML).toMatch(/test/i)
})

test('it should render error message if API call fails', async () => {
  fetch.mockReject(new Error('error'))

  await act(async () => {
    render(<APICall></APICall>)
  })

  expect(screen.getByTestId('activity').outerHTML).toMatch(/=== Error while querying the API ===/i)
})