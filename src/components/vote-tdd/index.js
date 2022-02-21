import React from 'react'

const VoteButton = ({alt, src, onVote}) => <button role={'button'} onClick={onVote}>
    <img role={'img'} alt={alt} src={src} />
</button>

export default VoteButton
export {VoteButton}