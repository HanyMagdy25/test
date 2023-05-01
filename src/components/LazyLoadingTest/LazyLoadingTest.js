import React from 'react'
import LoadingPosts from './Comps/LoadingPosts'
import { Posts } from './Comps/Posts'

const LazyLoadingTest = () => {
  return (
    <div className="container p-4">
    {/* <LoadingPosts /> */}
    <Posts />
    {/* <h1 className='underline'>fghfghfgh</h1> */}
</div>
  )
}

export default LazyLoadingTest