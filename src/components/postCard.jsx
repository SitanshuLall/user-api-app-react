import React from 'react'

const PostCard = (props) => { //props is used to pass data from parent to child component
  return (
    <div className='postCard'>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default PostCard
