// import {addNewMessage, deleteMyMessage, upvoteMessage, downvoteMessage} from '@/services/APIService'

export function setMessages ({commit}, messages) {
  commit('SET_MESSAGES', messages)
}

/*
 * TODO OPDRACHT 4d
 */
export function createMessage ({commit}, message) {
  // Roep de API aan met behulp van de functie addNewMessage() en stuur het message object mee.
}

/*
 * TODO OPDRACHT BONUS, deze acties zijn u alleen in local state, kun jij ze ook naar de api sturen
 */
export function editMessage ({commit}, message) {
  commit('EDIT_MESSAGE', message)
}

export function deleteMessage ({commit}, messageId) {
  commit('DELETE_MESSAGE', messageId)
}

export function upvote ({commit, rootState}, messageId) {
  const user = rootState.user.email
  commit('UP_VOTE', {user, messageId})
}

export function downvote ({commit, rootState}, messageId) {
  const user = rootState.user.email
  commit('DOWN_VOTE', {user, messageId})
}
