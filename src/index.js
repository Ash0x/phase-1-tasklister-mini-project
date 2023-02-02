const form = document.getElementById('create-task-form')
const task = document.getElementById('new-task-description')
const list = document.getElementById('tasks')

const createElement = () => {
	let newContent = document.createTextNode(task.value)
	const listItem = document.createElement('li')
	const buttonsDiv = document.createElement('div')
	const editButton = document.createElement('button')
	editButton.textContent = 'Edit'
	editButton.addEventListener('click', (e) => {
		const editContent = document.createElement('input')
		const editSubmit = document.createElement('button')
		editContent.value = listItem.textContent
		listItem.appendChild(editContent)
		listItem.append(editSubmit)
		editSubmit.textContent = 'SubmitChange'
		editSubmit.addEventListener('click', (e) => {
			newContent.textContent = editContent.value
			editContent.remove()
			editSubmit.remove()
		})
	})
	const deleteButton = document.createElement('button')
	deleteButton.textContent = 'Delete'
	deleteButton.addEventListener('click', (e) => {
		listItem.remove()
	})
	listItem.appendChild(newContent)
	listItem.appendChild(buttonsDiv)
	buttonsDiv.appendChild(editButton)
	buttonsDiv.appendChild(deleteButton)
	list.appendChild(listItem)
	task.value = ''
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	createElement()
})
