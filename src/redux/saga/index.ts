import { all } from 'redux-saga/effects'
import employerWatcher from './employer'
import jobSeekerWatcher from './jobseeker'
import skillsWatcher from './resources'
import userWatcher from './user'

export default function* rootSaga() {
  yield all([
    ...employerWatcher,
    ...jobSeekerWatcher,
    ...skillsWatcher,
    ...userWatcher,
  ])
}
