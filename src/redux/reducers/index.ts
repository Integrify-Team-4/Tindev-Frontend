import { combineReducers } from 'redux'

import user from './user'
import employer from './employer'
import jobseeker from './jobseeker'
import resources from './resources'
import skill from './skill'

const rootReducer = () =>
  combineReducers({ user, employer, jobseeker, resources, skill })

export default rootReducer
