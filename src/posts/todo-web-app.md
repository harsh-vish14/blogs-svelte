---
title: Full Stack Todo web App - Part 1 (Frontend)
description: Full stack - Frontend and backend of todo application. This is frontend implementation.
slug: todo-web-app
bannerImage: 'https://firebasestorage.googleapis.com/v0/b/images-to-link-converter.appspot.com/o/banner.webp?alt=media&token=dd366c46-59e3-41c7-b6d8-0d66bc85fe98'
date: '2023-07-03'
categories:
  - HTML
  - CSS
  - JS
published: true
postLink: 'https://github.com/harsh-vish14/blogs-svelte/blob/master/src/posts/todo-web-app.md'
---

In this `two-part tutorial`, we will be developing a todo application. In Part 1, we will focus on implementing the frontend using `HTML`, `CSS`, and `JavaScript`. Part 2 will cover the backend implementation using [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/).

For Part 1, our main goal is to create a `user interface` that allows users to manage their tasks. We will start by designing the layout using HTML and styling it with CSS. We'll create an input field where users can enter their tasks and a list to display the tasks.

Next, we'll use JavaScript to add functionality to our application. We'll write code to handle user input, such as adding tasks to the list and marking tasks as completed. Additionally, we'll implement features like editing tasks, deleting tasks, and filtering tasks based on their status (completed or not completed).

By the end of Part 1, we will have a fully functional frontend for our todo application, where users can interact with the interface to manage their tasks. In Part 2, we'll build the backend to handle data storage, retrieval, and communication between the frontend and the database.

Stay tuned for Part 1, where we'll dive into the implementation details of the frontend using HTML, CSS, and JavaScript.

You can use [Codepen](https://codepen.io/pen/) for this project

## HTML file

To start the work first we need the HTML file lets make one `index.html`

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>TODO</title>
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
			crossorigin="anonymous"
		/>
		<link rel="stylesheet" href="index.css" />
		<link rel="shortcut icon" href="./icons/plus.svg" type="image/x-icon" />
	</head>

	<body>
		<div class="main-container">
			<div class="container-add">
				<input type="text" class="form-control" placeholder="Enter your Todo" id="todo-add-input" />
				<button class="btn btn-primary" id="todo-add-submit">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-plus"
					>
						<line x1="12" y1="5" x2="12" y2="19"></line>
						<line x1="5" y1="12" x2="19" y2="12"></line>
					</svg>
				</button>
			</div>
			<ul class="list-group"></ul>
		</div>
		<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
			<div
				id="liveToast-delete"
				class="toast"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="toast-header">
					<strong class="me-auto">Alert</strong>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class="toast-body">Item deleted successfully</div>
			</div>
		</div>
		<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
			<div
				id="liveToast-checked"
				class="toast"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="toast-header">
					<strong class="me-auto">Alert</strong>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class="toast-body">Item checked</div>
			</div>
		</div>
		<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
			<div
				id="liveToast-un-checked"
				class="toast"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="toast-header">
					<strong class="me-auto">Alert</strong>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class="toast-body">Item un-checked</div>
			</div>
		</div>

		<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
			<div
				id="liveToast-updated"
				class="toast"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="toast-header">
					<strong class="me-auto">Alert</strong>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class="toast-body">Item Updated Successfully</div>
			</div>
		</div>

		<div
			class="modal fade"
			id="myModal"
			aria-hidden="true"
			aria-labelledby="exampleModalToggleLabel2"
			tabindex="-1"
		>
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalToggleLabel2">Todo</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="mb-3">
								<label for="recipient-name" class="col-form-label">Todo Title:</label>
								<input type="text" class="form-control" id="todo-title-text" style="border:none;" />
							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">Todo Content:</label>
								<textarea
									class="form-control"
									id="todo-content-text"
									style="border:none;"
									rows="10"
								></textarea>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button
							class="btn btn-primary"
							data-bs-target="#exampleModalToggle"
							id="model-submit-btn"
							data-bs-toggle="modal"
						>
							Update
						</button>
					</div>
				</div>
			</div>
			<!-- CREATED BY HARSHKUMAR VISHWAKARMA-->
		</div>
		<!-- Bootstrap Import throw CDN -->
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
			crossorigin="anonymous"
		></script>
		<script src="./index.js"></script>
	</body>
</html>
```

## add style CSS

Html is done, now we need to add styles so we need `index.css`

```css
/* index.css */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
* {
	padding: 0px;
	margin: 0px;
}

html {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

body {
	font-family: 'Ubuntu', sans-serif;
	background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
	background-repeat: no-repeat;
	min-height: calc(100vh - 20px);
}

.main-container {
	max-width: 700px;
	margin: auto;
	margin-top: 20px;
}

.main-container .list-group-item {
	margin-top: 5px;
	margin-left: 20px;
	margin-right: 20px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
}

.main-container .list-group-item .list-group-item-content {
	padding: 7px;
	width: 100%;
	cursor: pointer;
}

.main-container .list-group-item .form-group-item-button {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	gap: 5px;
}

.done {
	text-decoration: line-through;
}

.todo-item-delete:hover {
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

.todo-item-delete:hover svg {
	stroke: red;
	cursor: pointer;
}

.container-add {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	gap: 10px;
	margin-left: 20px;
	margin-right: 20px;
	margin-bottom: 20px;
}
```

make sure you're using correct class names

## Add Logic

Once our html is ready and we have added style throw index.css

now we need to add a logic throw js and we need to add `index.js`

```js
let cameData = [];
const deleteToast = document.getElementById('liveToast-delete');
const updateToast = document.getElementById('liveToast-updated');
const customModel = document.getElementById('myModal');

document.getElementById('model-submit-btn').addEventListener('click', () => {
	updateItem();
});

document.getElementById('todo-add-submit').addEventListener('click', () => {
	submitTodoItem();
});

// add item to the list
const submitTodoItem = async () => {
	const inputValue = document.getElementById('todo-add-input');
	if (!inputValue.value) {
		alert('todo cannot be empty');
		return;
	}
	const res = await fetch(`https://backend-server/api/v1/`, {
		method: 'POST',
		body: JSON.stringify({
			title: inputValue.value
		}),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		inputValue.value = '';
		await getAllData();
	}
};

// update item
const updateItem = async () => {
	const itemTitle = document.getElementById('todo-title-text');
	const itemContent = document.getElementById('todo-content-text');
	var myModal = new bootstrap.Modal(customModel, {
		keyboard: false
	});
	const currentId = customModel.getAttribute('current-model-id');

	const res = await fetch(`https://backend-server/api/v1/${currentId}`, {
		method: 'PUT',
		body: JSON.stringify({
			title: itemTitle.value,
			content: itemContent.value
		}),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		var toast = new bootstrap.Toast(updateToast);
		toast.show();
		await getAllData();
	}
	myModal.hide();
};

// add a check mark
const clickedMe = async (i, id) => {
	var myModal = new bootstrap.Modal(customModel, {
		keyboard: false
	});
	customModel.setAttribute('current-model-id', id);
	myModal.show();
	const textTitle = document.getElementById('todo-title-text');
	textTitle.value = cameData[parseInt(i)].title;
	const messageText = document.getElementById('todo-content-text');
	messageText.value = cameData[parseInt(i)].detail;
};

// remove item from the list
const deleteMe = async (index, id) => {
	cameData.splice(index, 1);
	generateItems(cameData);

	const res = await fetch(`https://backend-server/api/v1/${id}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		var toast = new bootstrap.Toast(deleteToast);
		toast.show();
		await getAllData();
	}
};

const checkedUp = async (id) => {
	const checkBox = document.getElementById(`check-box-${id}`);
	const itemBox = document.getElementById(`${id}`);
	const checked = document.getElementById('liveToast-checked');
	const unchecked = document.getElementById('liveToast-un-checked');
	if (!checkBox.checked) {
		itemBox.classList.remove('done');
		await fetch(`https://backend-server/api/v1/not-done/${id}`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		var toast = new bootstrap.Toast(unchecked);
		toast.show();
	} else {
		itemBox.classList.add('done');
		await fetch(`https://backend-server/api/v1/done/${id}`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		var toast = new bootstrap.Toast(checked);
		toast.show();
	}
};

const group = document.querySelector('.list-group');

// fetching all data from server
const getAllData = async () => {
	const res = await fetch('https://backend-server/api/v1/');
	const data = await res.json();
	cameData = data;
	generateItems(data);
};
getAllData();

const generateItems = (data) => {
	currentData = '';
	data.forEach((item, i) => {
		currentData += `<li class="list-group-item">
                <input class="form-check-input me-1" ${
									item.done ? 'checked' : ''
								} type="checkbox"  id='check-box-${item._id}' onclick="checkedUp('${item._id}')">
                <div onclick="clickedMe('${i}','${item._id}')" class="list-group-item-content ${
			item.done ? 'done' : ''
		}" id="${item._id}">
                    ${item.title}
                </div>
                <div class="form-group-item-button">
                    <div class="todo-item-delete" onclick="deleteMe('${i}','${item._id}')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-trash-2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                            </path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                    <div class="todo-item-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-arrow-right">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
            </li>`;
	});
	group.innerHTML = currentData;
};
```

This is frontend implementation, in part-2 there will backend with all crud operations and database connected
