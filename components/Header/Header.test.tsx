/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import Header from "@/components/Header/Header";


describe('Header', () => {
  it('renders a heading with title', () => {
    render(<Header />)

    const heading = screen.getByRole('heading', {
      name: /Karamazov/,
    })

    expect(heading).toBeInTheDocument()
  })
 
})