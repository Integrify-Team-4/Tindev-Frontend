import React /*, { useState } */ from 'react'
//import { useDispatch, useSelector } from 'react-redux'

import Tabs from '../../components/Tabs'
import MatchCardCompany from '../../components/MatchCardCompany'
import CompanyProfileForm from '../../components/CompanyProfileForm'
import ChatBox from '../../components/ChatBox'

const CompanyProfile = () => {
  const match = {
    firstName: 'Dilip',
    lastName: 'Poudel',
    skills: ['javascript', 'react'],
  }

  return (
    <>
      <Tabs
        formComponent={<CompanyProfileForm />}
        matchComponent={<MatchCardCompany match={match} />}
        chatComponent={<ChatBox />}
      />
    </>
  )
}
export default CompanyProfile
