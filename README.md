# Monster Rolodex 

## Introduction
Monster Rolodex is a React application that showcases the use of fundamental React concepts such as class components, state, and props. The project also utilizes CSS for styling and embraces the concept of React lifecycle methods to handle data fetching and updates.

## Project Structure
The project's main codebase is located inside the src directory. It contains several JavaScript (.js) files that represent various components of the application, along with corresponding CSS (.css) files for styling these components.

## Components

### Card Component
The Card component (Card.js) is a React class component that represents an individual monster card. It receives id, name, and email as props, and it uses these to render an image and some text in its render function. The image URL is generated using the received id and the robohash.org service.

### SearchBox Component
The SearchBox component (SearchBox.js) is a class component that allows users to search through the monster cards by filtering by name. It updates the this.setState object within its event handler whenever the user types something into the search box.

### CardList Component
CardList component (CardList.js) is a class component that renders a list of Card components. It receives the filtered monsters as props and maps over them to generate the list.

## Lifecycle Methods

### componentDidMount
In the main App component (App.js), the componentDidMount lifecycle method is used to fetch data from an API and update the component's state when the component is first mounted to the DOM. This triggers a re-render of the component, causing the fetched monsters to be displayed.

## Lessons Learned
This project is a practical example of how to structure a React application using class components and how to use props to pass data down to child components. Additionally, it demonstrates the use of external services (like robohash.org for generating images) in a React app, and how to handle side effects with lifecycle methods. The code is modular, and each component has a clear, specific role, which makes the project easy to understand and maintain.

## Future Improvements
Some potential improvements could include adding more interactivity (for example, clicking a card could show more details about the monster), or expanding the search functionality (it could be made more advanced, allowing users to search by different fields, not just names). Although this project uses class components and their corresponding lifecycle methods, an opportunity for learning would be to refactor the code to use functional components and React hooks for a more modern approach to state management and side effects. (Monster-Rolodex-2.0)