import React from 'react'
import { Post } from '../components'

const ByTags = () => {
  return (
    <div>
        {
            ([...Array(5)]).map((item, index) => (
            <Post id={index + 1} title='test'/>
            ))
        }
    </div>
  )
}

export default ByTags