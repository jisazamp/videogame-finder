import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CriticScore } from '../CriticScore'

describe('CriticScore', () => {
  test('should match snapshot', () => {
    render(<CriticScore score={90} />)
    expect(screen).toMatchSnapshot()
  })
})
