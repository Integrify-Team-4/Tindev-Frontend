import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './saga'
import { AppState } from './types'

export const initState: AppState = {
  user: {
    userInfo: {
      role: '',
      id: 0,
      loading: false,
      error: null,
    },
    info: {
      jobPosts: [],
      skills: [],
    },
  },
  employer: {
    companyName: '',
    companyInfo: '',
    address: '',
  },
  jobseeker: {
    firstName: '',
    lastName: '',
    seniority: '',
    relocate: false,
    startingDate: '',
    institute: '',
    degree: '',
    contact: '',
    workExperience: '',
  },
  resources: {
    skills: [],
    loading: false,
    error: null,
    jobPost: {
      title: '',
      jobDescription: '',
      seniority: '',
      skills: [],
      startingDate: '',
    },
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  let composeEnhancer = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    rootReducer(),
    // @ts-ignore
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
