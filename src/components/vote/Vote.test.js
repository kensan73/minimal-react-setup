import React from "react";
import {render} from '@testing-library/react';
import Vote from './index'

test('given image, vote status, vote handler, renders button to screen', () => {
    const stubHandleVote = jest.fn()
    const stubAltText = 'vote like'
    const stubThumbsUp='some url'

    const {getByRole} = render(<Vote handleVote={stubHandleVote} altText={stubAltText} imgSrc={stubThumbsUp} />)

    expect(getByRole('img', { name: stubAltText })).toBeInTheDocument();
})