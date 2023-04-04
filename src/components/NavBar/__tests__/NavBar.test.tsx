import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NavBar } from '../NavBar'

describe('<NavBar />', () => {
  test('NavBar mounts properly', () => {
    render(<NavBar />)
    expect(screen).toMatchSnapshot()

    const logo = screen.getByAltText('Logo')
    expect(logo).toBeTruthy()
  })
})
