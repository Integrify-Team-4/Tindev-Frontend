import React from 'react'

import AddJobPost from '../../components/AddJobPost'
import JobPostList from '../../components/JobPostList'
import './JobPost.scss'

const JobPost = () => {
  return (
    <>
      <h2 className="add-post">Add Job Post</h2>
      <AddJobPost />
      <h2 className="job-posts">Job Posts</h2>
      <div className="job-post-card">
        <div className="">
          <JobPostList />
        </div>
      </div>
    </>
  )
}

export default JobPost
