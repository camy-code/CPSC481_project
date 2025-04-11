## How to run

To run our program please clone the repo.
`git clone https://github.com/camy-code/CPSC481_project`

Then inside the folder "CPSC481_project" run the following command
`npm install @mui/system @mui/material @mui/styled-engine-sc`

Sometimes, you may need to do the following command as well in "CPSC481_project" folder:
`npm install react-router-dom`

To run the code, tyle `npm start` inside of "CPSC481_project" folder.

I got these commands from cloning the repo on my PC then doing the proper imports that I did 3 months ago when initially setting things up.

## Login Information & Application Guide

### Test Credentials

To log in to the application, use:

- Email: test@email.com
- Password: password

### Account Creation

When creating a new account:

- Email: Any valid email format (e.g., parent@example.com)
- Password: Minimum 6 characters
- PIN: Exactly 4 digits (This is used for parent access)

### Main Interactions

#### Authentication

- **Login/Create Account**: Initial screen with two large circular buttons
- **Password Visibility**: Toggle buttons to show/hide passwords and PINs
- **Back Buttons**: Present throughout the app to navigate to previous screens

#### Parent Controls

- **Add Child Profile**: Create new child profiles with custom names and pictures
- **Edit Profile**: Modify existing child profiles
- **Remove Profile**: Delete child profiles
- **Restrict Content**: Manage show restrictions for each profile
- **Watch History**: View and manage viewing history
- **Screen Time**: Set and adjust screen time limits

#### Child Interface

- **Profile Selection**: Choose between different child profiles
- **Show Categories**: Browse content by category (Animals, Fantasy, etc.)
- **Show Details**: View episode information and descriptions
- **Watch Controls**: Play, pause, and navigate episodes
- **Back to Menu**: Return to main menu from any screen

### Navigation Tips

- Use the back buttons to return to previous screens
- The KiddoFlix logo acts as a home button
- Category icons help identify different content sections

Note: This is a design concept and does not require actual authentication. Any valid input format will work for demonstration purposes, but inputs must meet the following requirements:

- Email must be in valid email format (e.g., user@domain.com)
- Password must be at least 6 characters long
- PIN must be exactly 4 digits

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
