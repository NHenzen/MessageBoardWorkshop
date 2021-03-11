export function SET_MESSAGES (s, e) {
  s.messages = e
}

export function ADD_NEW_MESSAGE (s, e) {
  s.messages.push(e)
}

export function EDIT_MESSAGE (s, e) {
  const n = s.messages.findIndex(s => s.id === e.id)
  n < 0 || (e.isEdited = !0, s.messages.splice(n, 1, e))
}

export function DELETE_MESSAGE (s, e) {
  const n = s.messages.findIndex(s => s.id === e)
  n < 0 || s.messages.splice(n, 1)
}

export function UP_VOTE (s, {messageId: e, user: n}) {
  const o = s.messages.findIndex(s => s.id === e)
  if (o < 0) return
  const t = s.messages[o].upvotes.findIndex(s => s === n)
  t > -1 ? s.messages[o].upvotes.splice(t, 1) : s.messages[o].upvotes.push(n)
}

export function DOWN_VOTE (s, {messageId: e, user: n}) {
  const o = s.messages.findIndex(s => s.id === e)
  if (o < 0) return
  const t = s.messages[o].downvotes.findIndex(s => s === n)
  t > -1 ? s.messages[o].downvotes.splice(t, 1) : s.messages[o].downvotes.push(n)
}
