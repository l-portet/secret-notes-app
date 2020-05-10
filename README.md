# Secret notes app
🔒📝 Secret notes app built with React and Express

[Live demo](https://secret-notes-app.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8ccd279a-a08e-4ce1-b051-324b4ba3a7f3/deploy-status)](https://app.netlify.com/sites/secret-notes-app/deploys)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Structure
The repo's structure is pretty straightforward: The back-end is in `api` folder and the web front-end is in `webapp`.

## Setup
```bash
npm i --prefix api && npm i --prefix webapp 
```

### Environment variables
Don't forget to set the needed env vars (find them in each directory's `.env.sample`).

## Usage
All commands are executed at the root of the project (find their equivalent in each `package.json` if you want an execution in a specific folder).

> Don't forget where your `.env` files are located. You might want to place them in the directory where you run your process.

### Webapp
```bash
npm run webapp:build
```
And serve the `webapp/build` folder.

### API
```bash
npm run api:start
```

## Issues
Found a bug? Feel free to contact me or open an issue on github. You can also contribute by creating a pull request.
