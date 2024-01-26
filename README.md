# Cashier Vania

This repository contains a web application built using ReactJS for managing cashier operations in a retail store. The application provides features such as product management, order payment, see availabily dining table, etc.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository onto your local machine using Git or download the ZIP file from GitHub.

2. Navigate into the project directory in your terminal or command prompt.

3. Install the dependencies by running the following command:

   ```
   npm install
   ```

4. Start the development server by running the following command:

   ```
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to access the application.

6. To build the application for production, run the following command:

   ```
   npm run build
   ```

7. To run tests, run the following command:

   ```
   npm test
   ```

8. To eject the application from the Create React App (CRA) template, run the following command:

   ```
   npm run eject
   ```

   Note: Running `npm run eject` will remove some features of CRA, such as automatic updates and some development-specific configuration. This should only be done if you want to customize the application's configuration beyond what CRA provides.

## Project Structure

This project follows the Airbnb JavaScript Style Guide and uses ESLint for code linting. The `package.json` file contains the necessary scripts for starting the development server, building the application for production, running tests, and ejecting the application from the CRA template. The `browserslist` configuration specifies the browsers to support for production and development builds. The `devDependencies` section contains the necessary development dependencies for testing, styling, and preprocessing.

## Technologies Used

This project integrates the following third-party libraries:

- Axios for HTTP requests
- Fetch-Mock for mocking server responses during testing
- React-Currency-Format for currency formatting
- React-Realtime for real-time updates
- React-Number-Format for number formatting
- React-To-Print for printing capabilities
- SweetAlert2 for pop-up messages
- SweetAlert2-React-Content for customizing SweetAlert2 messages in ReactJS applications
- Redux-Form for form management
- Enzyme for testing React components
- CSS-Loader for CSS preprocessing using CSSNext syntax (Sass)
- Less-Loader for Less preprocessing
- Style-Loader for injecting styles into the DOM
- URL-Loader for loading images, fonts, and other resources
- React-Hot-Loader for hot module replacement during development

## Contributing

We welcome contributions to this project. If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request. Make sure to follow the Airbnb JavaScript Style Guide and use ESLint for code linting.