import React from 'react'
import user from '@testing-library/user-event'
import {render} from '@testing-library/react'
import VoteButton from './index'

const stubAlt = 'some alt text'
const stubSrc = 'some src'

describe('vote button layout', () => {
    it('has a button', () => {
        const {getByRole} = render(<VoteButton src={stubSrc} alt={stubAlt} />)

        expect(getByRole('button', {name: stubAlt})).toBeInTheDocument()
    })
    it('has an image', () => {
        const {getByRole} = render(<VoteButton src={stubSrc} alt={stubAlt} />)

        expect(getByRole('img', {name: stubAlt})).toBeInTheDocument()
    })
})

describe('vote button behavior', () => {
    it('calls onVote when clicked', () => {
        const mockOnVote = jest.fn()
        const {getByRole} = render(<VoteButton src={stubSrc} alt={stubAlt} onVote={mockOnVote} />)

        user.click(getByRole('button'))

        expect(mockOnVote).toHaveBeenCalledTimes(1)
    })
})