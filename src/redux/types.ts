export const REGISTER_EMPLOYER_REQUEST = 'REGISTER_EMPLOYER_REQUEST'
export const REGISTER_EMPLOYER_SUCCESS = 'REGISTER_EMPLOYER_SUCCESS'
export const REGISTER_EMPLOYER_FAIL = 'REGISTER_EMPLOYER_FAIL'
export const UPDATE_JOBSEEKER_REQUEST = 'UPDATE_JOBSEEKER_REQUEST'
export const UPDATE_JOBSEEKER_SUCCESS = 'UPDATE_JOBSEEKER_SUCCESS'
export const UPDATE_JOBSEEKER_FAIL = 'UPDATE_JOBSEEKER_FAIL'
export const REGISTER_JOBSEEKER_REQUEST = 'REGISTER_JOBSEEKER_REQUEST'
export const REGISTER_JOBSEEKER_SUCCESS = 'REGISTER_JOBSEEKER_SUCCESS'
export const REGISTER_JOBSEEKER_FAIL = 'REGISTER_JOBSEEKER_FAIL'
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'
export const LOGOUT_USER = 'LOGOUT_USER'
export const JOB_POST_REQUEST = 'JOB_POST_REQUEST'
export const JOB_POST_SUCCESS = 'JOB_POST_SUCCESS'
export const JOB_POST_FAIL = 'JOB_POST_FAIL'
export const JOB_DELETE_REQUEST = 'JOB_DELETE_REQUEST'
export const JOB_DELETE_SUCCESS = 'JOB_DELETE_SUCCESS'
export const JOB_DELETE_FAIL = 'JOB_DELETE_FAIL'
export const CREATE_SKILL_REQUEST = 'CREATE_SKILLS_REQUEST'
export const CREATE_SKILL_SUCCESS = 'CREATE_SKILL_SUCCESS'
export const CREATE_SKILL_FAIL = 'CREATE_SKILL_FAIL'
export const GET_SKILLS_REQUEST = 'GET_SKILLS_REQUEST'
export const GET_SKILLS_SUCCESS = 'GET_SKILLS_SUCCESS'
export const GET_SKILLS_FAIL = 'GET_SKILLS_FAIL'
export const ADD_SKILL = 'ADD_SKILL'
export const REMOVE_SKILL = 'REMOVE_SKILL'

export type UserActions =
  | LoginUserRequestAction
  | LoginUserSuccessAction
  | LoginUserFailAction
  | LogoutUserAction

export type LoginUserRequestAction = {
  type: typeof LOGIN_USER_REQUEST
  payload: {
    credential: {
      email: string
      password: string
    }
    history: {
      length: number
      action: string
      location: {
        pathname: string
        search: string
        hash: string
        key: string
      }
    }
  }
}

export type LoginUserSuccessAction = {
  type: typeof LOGIN_USER_SUCCESS
  payload: {
    credential: {
      email: string
      password: string
    }
    userInfo: {
      role: string
      firstName?: string
      lastName?: string
      contact?: string
      relocate?: boolean
      seniority?: string
      startingDate?: string
      created?: Date
      education?: {
        institute?: string
        degree?: string
      }
      skills?: any[]
      skillLevel?: string
      companyName?: string
      companyInfo?: string
      address?: string
      jobPost?: any[]
    }
  }
}

export type LoginUserFailAction = {
  type: typeof LOGIN_USER_FAIL
  payload: {
    error: any
  }
}

export type LogoutUserAction = {
  type: typeof LOGOUT_USER
}

export type EmployerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction
  | CreatingJobActionType
  | JobFailActionType
  | JobSuccessActionType
  | DeletingRequestActionType
  | DeletingSuccessActionType
  | DeletingFailActionType

export type RegisterEmployerRequestAction = {
  type: typeof REGISTER_EMPLOYER_REQUEST
  payload: {
    credential: {
      email: string
      password: string
    }
  }
}

export type RegisterEmployerSuccessAction = {
  type: typeof REGISTER_EMPLOYER_SUCCESS
  payload: {
    employerInfo: {
      email: string
      password: string
      role: string
    }
  }
}

export type RegisterEmployerFailAction = {
  type: typeof REGISTER_EMPLOYER_FAIL
  payload: {
    error: any
  }
}

export type JobseekerActions =
  | RegisterJobseekerRequestAction
  | RegisterJobseekerSuccessAction
  | RegisterJobseekerFailAction
  | updateJobseekerRequestAction
  | updateJobseekerSuccessAction
  | updateJobseekerFailAction

export type RegisterJobseekerRequestAction = {
  type: typeof REGISTER_JOBSEEKER_REQUEST
  payload: {
    credential: {
      email: string
      password: string
    }
  }
}

export type RegisterJobseekerSuccessAction = {
  type: typeof REGISTER_JOBSEEKER_SUCCESS
  payload: {
    jobSeekerInfo: {
      email: string
      password: string
      role: string
    }
  }
}

export type RegisterJobseekerFailAction = {
  type: typeof REGISTER_JOBSEEKER_FAIL
  payload: {
    error: any
  }
}

export type SkillsActions =
  | GetSkillsRequestAction
  | GetSkillsSuccessAction
  | GetSkillsFailAction

export type SkillActions =
  | CreateSkillRequestAction
  | CreateSkillSuccessAction
  | CreateSkillFailAction
  | AddSkillAction
  | RemoveSkillAction

export type Skill = {
  id: any
  name: string
}

export type CreateSkillRequestAction = {
  type: typeof CREATE_SKILL_REQUEST
  payload: {
    name: Skill
  }
}

export type CreateSkillSuccessAction = {
  type: typeof CREATE_SKILL_SUCCESS
  payload: {
    skillInfo: {
      id: string
      name: string
    }
  }
}

export type CreateSkillFailAction = {
  type: typeof CREATE_SKILL_FAIL
  payload: {
    error: string
  }
}

export type GetSkillsRequestAction = {
  type: typeof GET_SKILLS_REQUEST
}

export type GetSkillsSuccessAction = {
  type: typeof GET_SKILLS_SUCCESS
  payload: {
    skills: any[]
  }
}

export type GetSkillsFailAction = {
  type: typeof GET_SKILLS_FAIL
  payload: {
    error: string
  }
}

export type AddSkillAction = {
  type: typeof ADD_SKILL
  payload: {
    skill: Skill
  }
}

export type RemoveSkillAction = {
  type: typeof REMOVE_SKILL
  payload: {
    skill: Skill
  }
}

export type Credential = {
  email?: string
  password?: string
  history?: any
  firstName?: string
  lastName?: string
  contact?: string
  relocate?: string
  seniority?: string
  skills?: any[]
  skillLevel?: string
  duration?: string
  startingDate?: string
  created?: Date
  education?: {
    institute?: string
    degree?: string
  }
  companyName?: string
  companyInfo?: string
  address?: string
  jobPost?: any[]
  role?: string
}

export type CredentialState = {
  credential: Credential
}

export type CredentialStateUser = {
  credential: {
    email: string
    password: string
  }
  history: {
    length: number
    action: string
    location: {
      pathname: string
      search: string
      hash: string
      key: string
    }
  }
  userInfo: {
    role: string
  }
  loading: Boolean
  error: any
  skills: any[]
}

export type CredentialStateEmployer = {
  credential: {
    email: string
    password: string
  }
  role: string
  loading: Boolean
  error: any
  jobPost: {
    title: string
    jobDescription: string
    seniority: string
    skills: any[]
  }
}

export type CredentialStateJobseeker = {
  credential: {
    email: string
    password: string
  }
  role: string
  loading: Boolean
  error: any
  skills: any[]
}

export type SkillsState = {
  skills: any[]
  loading: boolean
  error: any
}

export type SkillState = {
  inProfile: any[]
  loading: boolean
  error: any
}
export type IdToDelete = string

export type AppState = {
  user: CredentialStateUser
  employer: CredentialStateEmployer
  jobseeker: CredentialStateJobseeker
  resources: SkillsState
  skill: SkillState
}

export type updateJobseekerRequestAction = {
  type: typeof UPDATE_JOBSEEKER_REQUEST
  payload: {
    jobSeekerId: string
  }
}

export type updateJobseekerSuccessAction = {
  type: typeof UPDATE_JOBSEEKER_SUCCESS
  payload: {
    firstName: string
    lastName: string
    contact: string
    seniority: string
  }
}

export type updateJobseekerFailAction = {
  type: typeof UPDATE_JOBSEEKER_FAIL
  payload: string
}

//  for job post ==> redux stuff
export type JobPost = {
  title: string
  jobDescription: string
  seniority: string
  skills: any[]
}

export type CreatingJobActionType = {
  type: typeof JOB_POST_REQUEST
  payload: JobPost
}
export type JobSuccessActionType = {
  type: typeof JOB_POST_SUCCESS
}
export type JobFailActionType = {
  type: typeof JOB_POST_FAIL
  payload: {
    error: any
  }
}
export type DeletingRequestActionType = {
  type: typeof JOB_DELETE_REQUEST
  payload: number
}
export type DeletingSuccessActionType = {
  type: typeof JOB_DELETE_SUCCESS
}
export type DeletingFailActionType = {
  type: typeof JOB_DELETE_FAIL
  payload: {
    error: any
  }
}
