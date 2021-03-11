import {setMail} from '../../services/APIService'

export function setEmail ({commit}, email) {
  setMail(email)
  commit('SET_EMAIL', email)
}

export function getUsers ({commit}, users) {
  commit('SET_USERS', users)
}
