export const getAllMessages = (state) => {
  // TODO OPDRACHT 2b
  // RETOURNEER DE MESSAGES UIT DE STATE
  return ''
}

// HIERONDER HOEF JE NIETS TE DOEN
// MAG WEL MAAR DAN KAN JE DINGEN KAPOT MAKEN

export const getMyMessages = (state, getters, rootState) => {
  return state.messages.filter(m => m.user === rootState.user.email)
}

export const isUpvotedByMe = (state, getters, rootState) => (messageId) => {
  const message = state.messages.find(m => m.id === messageId)
  if (!message) return
  return message.upvotes.some(u => u === rootState.user.email)
}

export const isDownvotedByMe = (state, getters, rootState) => (messageId) => {
  const message = state.messages.find(m => m.id === messageId)
  if (!message) return
  return message.downvotes.some(u => u === rootState.user.email)
}
