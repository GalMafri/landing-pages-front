# Project explanation

## Components

In React, the components folder is where you store reusable UI components. These components are typically modular and encapsulate a specific set of functionality. Within the components folder, you might have sub-folders such as UI for presentational components and Containers for components with state and logic. Components can be composed together to build complex UIs, and they promote code reusability and maintainability.

## Functions

This folder is basically for functions that are repeated throughout the project, and can be accessed anywhere in Project

## Pages

This folder actually contains all the pages that are found during the project, you can add new folders that contain only the pages that are used when connected to the site should see. Inside this folder is the file MainRoute which is actually the decision tree which page to display according to the url.

## Scss

This is basically a folder that contains all the scss files of the project, the main.scss file basically includes all the subfolders in the scss folder. Each subfolder has a file called z-import.scss which basically contains all the files in that subfolder.

## Store

In a React project that uses Redux with reduxjs/toolkit, the store folder contains the Redux store configuration and all the reducers used in the application. The configureStore function from reduxjs/toolkit is used to create the store, and it automatically sets up the Redux middleware. The reducers are typically organized into separate files and combined using the combineReducers function provided by reduxjs/toolkit. The store is then used to hold the application state, and it can be accessed from any component using the useSelector hook provided by the react-redux library. The store folder is a central part of a Redux application, and it is where most of the Redux-related logic is implemented. The store.js file is the main file that actually calls the other files.

## env

In a React project, the .env file is used to store environment variables that are required by the application. These variables can include API keys, database URLs, or other sensitive information that should not be stored in the source code. The variables defined in the .env file are automatically loaded into the process environment when the app is built or run, and can be accessed using the process.env object. This allows developers to easily manage and configure their application for different environments such as development, testing, or production.

## env.production

In a React project, the .env.production file is used to store environment variables specific to the production environment. This file is used in conjunction with the .env file to provide configuration for the application in different environments. The variables defined in the .env.production file will overwrite any variables with the same name in the .env file when the application is built or deployed for production. This allows developers to specify different configuration values for development, testing, and production environments, ensuring that the app runs consistently across different environments.

![Happy codding](https://pbs.twimg.com/profile_images/1294271945299689472/4fwL9aL7_400x400.jpg)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Runs the command to install all the packages in the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
