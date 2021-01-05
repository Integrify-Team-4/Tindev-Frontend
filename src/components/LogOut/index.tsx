import React from 'react'
import { Button } from 'react-bootstrap'
import LocalStorage from '../../local-storage'
import { useHistory } from 'react-router-dom'

const LogOut = () => {
  const history = useHistory()
  const deleteTokenFromLocalStorage = async () => {
    await LocalStorage.removeToken()
    await history.push('/')
  }

  return (
    <>
      <Button variant="danger" onClick={() => deleteTokenFromLocalStorage()}>
        LogOut
      </Button>
    </>
  )
}
export default LogOut
