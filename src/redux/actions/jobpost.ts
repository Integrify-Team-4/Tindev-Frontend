import {
  CreatingJobActionType,
  JobSuccessActionType,
  JobFailActionType,
  JobPost,
  DeletingRequestActionType,
  DeletingSuccessActionType,
  DeletingFailActionType,
  JOB_POST_REQUEST,
  JOB_POST_SUCCESS,
  JOB_POST_FAIL,
  JOB_UPDATE_REQUEST,
  JOB_UPDATE_SUCCESS,
  JOB_UPDATE_FAIL,
  JOB_DELETE_REQUEST,
  JOB_DELETE_SUCCESS,
  JOB_DELETE_FAIL,
} from '../types'
export const creatingJobPostRequest = (
  jobForm: JobPost
): CreatingJobActionType => {
  return {
    type: JOB_POST_REQUEST,
    payload: jobForm,
  }
}
export const registerJobPostSuccess = (): JobSuccessActionType => {
  return {
    type: JOB_POST_SUCCESS,
  }
}
export const registerJobPostFail = (error: {
  error: any
}): JobFailActionType => {
  return {
    type: JOB_POST_FAIL,
    payload: error,
  }
}
export const deleteJobPostRequest = (id: number): DeletingRequestActionType => {
  return {
    type: JOB_DELETE_REQUEST,
    payload: id,
  }
}
export const deleteJobPostSuccess = (): DeletingSuccessActionType => {
  return {
    type: JOB_DELETE_SUCCESS,
  }
}
export const deleteJobPostFail = (error: any): DeletingFailActionType => {
  return {
    type: JOB_DELETE_FAIL,
    payload: error,
  }
}

export const updateJobPostRequest = (jobPost: any) => {
  return {
    type: JOB_UPDATE_REQUEST,
    payload: {
      jobPost,
    },
  }
}

export const updateJobPostSuccess = (jobPost: any) => {
  return {
    type: JOB_UPDATE_SUCCESS,
    payload: {
      jobPost,
    },
  }
}

export const updateJobPostFail = (error: string) => {
  return {
    type: JOB_UPDATE_FAIL,
    payload: error,
  }
}
