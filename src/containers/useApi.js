import react, { useState } from 'react'
import axios from 'axios'
const apiUrl = 'http://localhost:3000'

export default () => {

  const getUsers = async () => {
    try {
      const user = await axios.get(apiUrl + '/user' + '/18')
      // setData(user)
      console.log('user', user)
      return user
    } catch(e) {
      console.log('error', e)
    }
  }

  return getUsers
}