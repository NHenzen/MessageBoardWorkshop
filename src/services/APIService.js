import {db} from './firebase'

export function addNewMessage (message) {
  db.collection('messages').add({
    id: message.id,
    title: message.title,
    text: message.text,
    user: message.user,
    upvotes: message.upvotes,
    downvotes: message.downvotes,
    isEdited: message.isEdited
  })
}

export async function deleteMyMessage (messageId) {
  const document = await db.collection('messages').where('id','==',messageId).get()
  db.collection("messages").doc(document.docs[0].id).delete().then(() => {
    console.log("Document successfully deleted!")
  }).catch((error) => {
    console.error("Error removing document: ", error)
  })
}

export async function upvoteMessage (messageId, user) {
  const document = await db.collection('messages').where('id', '==', messageId).get()
  const data = document.docs[0].data()

  let newUpvoteArray
  let newDownvoteArray = data.downvotes

  if (data.upvotes.includes(user)) {
    newUpvoteArray = data.upvotes.filter(item => item !== user)
  } else {
    newUpvoteArray = data.upvotes
    newUpvoteArray.push(user)
  }
  if (data.downvotes.includes(user)) {
    newDownvoteArray = data.downvotes.filter(item => item !== user)
  }

  await db.collection('messages').doc(document.docs[0].id).update({
    upvotes: newUpvoteArray,
    downvotes: newDownvoteArray
  })
}

export async function downvoteMessage (messageId, user) {
  const document = await db.collection('messages').where('id', '==', messageId).get()
  const data = document.docs[0].data()

  let newUpvoteArray = data.upvotes
  let newDownvoteArray

  if (data.downvotes.includes(user)) {
    newUpvoteArray = data.downvotes.filter(item => item !== user)
  } else {
    newDownvoteArray = data.downvotes
    newDownvoteArray.push(user)
  }
  if (data.upvotes.includes(user)) {
    newUpvoteArray = data.upvotes.filter(item => item !== user)
  }

  await db.collection('messages').doc(document.docs[0].id).update({
    upvotes: newUpvoteArray,
    downvotes: newDownvoteArray
  })
}

export function setMail (email) {
  db.collection('persons').add({email})
}
