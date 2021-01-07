import React from 'react'

import Tabs from '../../components/Tabs'
import JobseekerProfileForm from '../../components/JobseekerProfileForm'
import MatchCardJobseeker from '../../components/MatchCardJobseeker'
import ChatBox from '../../components/ChatBox'

const JobseekerProfile = () => {
  return (
    <Tabs
      formComponent={<JobseekerProfileForm />}
      matchComponent={<MatchCardJobseeker />}
      chatComponent={<ChatBox />}
    />
  )
}

export default JobseekerProfile
