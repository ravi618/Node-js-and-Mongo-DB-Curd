const deleteButton = document.querySelector('#delete-button')
const updateButton = document.querySelector('#update-button')
const id=document.querySelector('#actionid')
const uid=document.querySelector('#updateid')
const name=document.querySelector('#name')
const email=document.querySelector('#email')
const contact=document.querySelector('#contact')
const description=document.querySelector('#description')
const messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
  fetch('/userdelete', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.value
	
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      if (response === 'No quote to delete') {
        messageDiv.textContent = 'No Darth Vadar quote to delete'
      } else {
        window.location.reload(true)
      }
    })
    .catch(console.error)
})

updateButton.addEventListener('click', _ => {
  fetch('/TravelContact', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: uid.value,
	  name: name.value,
		email:email.value,
		contact:contact.value,
		description:description.value
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)
    })
})



