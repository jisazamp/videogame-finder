import { CardContainer } from '../CardContainer'
import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

describe('CardContainer', () => {
  test('renders CardContainer', () => {
    render(<CardContainer />)
    expect(screen).toMatchSnapshot()
  })
})
