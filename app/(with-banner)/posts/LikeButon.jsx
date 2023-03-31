'use client'

import { useState } from 'react'

export const LikeButon = ({ id }) => {
  const [liked, setliked] = useState(false)

  return (
    <button onClick={() => setliked(!liked)}>
      {liked ? '<3' : '</3'}
    </button>
  )
}
