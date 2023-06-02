# Cyan Todo 📝

Cyan Todo is the ultimate task management web app built with React and Redux. With Cyan Todo, you can edit tasks like a ninja 🥷, add comments to any task like a wizard 🧙‍♂️, and break up tasks if completed or not like a superhero 🦸‍♂️. Plus, you can personalize your experience with a profile page like a rockstar 🤘.

## Features

- Edit tasks like a ninja 🥷
- Add comments to any task like a wizard 🧙‍♂️
- Break up tasks if completed or not like a superhero 🦸‍♂️
- Personalize your experience with a profile page like a rockstar 🤘

## Technologies Used

- React - because it's the coolest kid on the block 💻
- Redux - because it's the boss of state management 💪
- Chakra UI - because it's the coolest UI library around 🎨
- JSON Server - because it's the swiss army knife of mock APIs 🛠️

## Getting Started

To run this project, you need to clone both the backend and frontend repositories, download the required dependencies, and start the development servers.

### Clone the Backend Repository

```sh
git clone https://github.com/hosseinirtr/json-server.git
```

### Create the Database

If the `db.json` file is not available, create it using the following command:

```sh
nano db.json
```

Then, add the following content to the file:

```json
{
  "todos": [
    {
      "id": 1,
      "title": "Hiring Hossein with high salary",
      "completed": false
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "todoId": 1
    }
  ],
  "profile": {
    "name": ""
  }
}
```

### Start the Backend Server

```sh
json-server --watch db.json --port 8080
```

Note: The backend server runs on port `8080` by default. If you want to use a different port, update the `REACT_APP_SERVER_PORT` variable in the `.env` file of the frontend project like a hacker 🕵️‍♂️.

### Clone the Frontend Repository

```sh
git clone https://github.com/hosseinirtr/Cyan-Todo.git
```

### Install Dependencies

```sh
cd Cyan-Todo
npm install
```

### Start the Frontend Server

```sh
npm start
```

Note: The frontend server runs on port `3000` by default. If you want to use a different port, update the `PORT` variable in the `.env` file of the frontend project like a pro 🦸‍♀️.

## Contributing

Contributions are always welcome! If you have any ideas or suggestions, please create an issue or submit a pull request like a champion 🏆.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

Enjoy this awesome project and don't hesitate to contact me if you have any questions or challenges with the project like a warrior 🤺!
