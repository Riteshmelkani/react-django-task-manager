# Task Manager Application

A full-stack Task Manager application built with **React**, **Django REST Framework**, and **SQLite**. Users can create, manage, update, and track their daily tasks through a clean and responsive interface.

## Live Demo

* Frontend: https://react-django-task-manager.vercel.app/
* Backend API: https://react-django-task-manager.onrender.com/api/tasks/

## Features

### Core Features

* Create new tasks
* View all tasks
* Edit existing tasks
* Delete tasks with confirmation
* Mark tasks as complete/incomplete
* Filter tasks by status (All, Active, Completed)

### Additional Features

* Search tasks by title
* Active vs Completed task statistics
* Empty state UI
* Overdue task highlighting
* Data persistence using SQLite

## Tech Stack

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Django
* Django REST Framework
* SQLite

## Project Structure

```text
task-manager-app/
│
├── frontend/
│   ├── src/
│   └── public/
│
├── backend/
│   ├── taskmanager/
│   ├── tasks/
│   ├── manage.py
│   └── db.sqlite3
│
└── README.md
```

## API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | /api/tasks/      | Get all tasks |
| POST   | /api/tasks/      | Create a task |
| PUT    | /api/tasks/{id}/ | Update a task |
| DELETE | /api/tasks/{id}/ | Delete a task |

## Run Locally

### Backend

```bash
cd backend
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Future Improvements

* Drag and Drop Task Reordering
* User Authentication
* Task Categories and Priorities

## Author

Ritesh Melkani
