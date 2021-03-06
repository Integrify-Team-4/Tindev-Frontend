import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CompanyProfile from '../../pages/CompanyProfile'
import JobseekerProfile from '../../pages/JobseekerProfile'
import { AppState } from '../../redux/types'
import Loader from '../Loader'

const AuthApp = () => {
  const { isLoggedIn } = useSelector((state: AppState) => state.user)
  const { loading, role } = useSelector(
    (state: AppState) => state.user.userInfo
  )

  if (loading) return <Loader />

  if (!isLoggedIn) return <Redirect to="/login" />

  return <>{role === 'employer' ? <CompanyProfile /> : <JobseekerProfile />}</>
}

export default AuthApp
