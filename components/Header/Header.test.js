/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import Header from "@/components/Header/Header";


describe('Header', () => {
  it('renders a heading with title', () => {
    render(<Header />)

    const heading = screen.getByRole('heading', {
      name: /KARAMAZOV/,
    })

    expect(heading).toBeInTheDocument()
  }),
  it('renders login and signup buttons', () => {
    render(<Header />)

    const login = screen.getByRole('link', {
      name: /login/i,
    })
    const signup = screen.getByRole('link', {
      name: /sign up/i,
    })
    expect(signup).toBeInTheDocument()
    expect(login).toBeInTheDocument()
  })
})