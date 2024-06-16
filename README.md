Kraftshala Frontend Developer Intern Assignment 

Weather Application

Project Overview:
This weather application allows users to fetch and display current weather information based on their input (city name or ZIP code). It includes features such as dark mode/light mode toggle and displays additional weather details like humidity. The application is built using React, and it integrates with the Open Weather API to retrieve weather data.

Features:
Current Weather Information: Displays location, temperature, date, and time.
Search Functionality: Users can search for weather data by entering a city name or ZIP code.
Dark Mode: Toggle between dark mode and light mode for better user experience.
Additional Weather Information: Displays humidity along with basic weather information.
Responsive Design: Works well on desktop, tablet, and mobile devices.

Technologies Used:
React: JavaScript library for building user interfaces.
Axios: HTTP client for making API requests.
Open Weather API: API used to fetch weather data.
CSS: For styling the application.


Installation and Setup Instructions:

Clone the Repository:
git clone <repository-link>
cd <repository-folder>


Install Dependencies:
npm install


Get API Key:
Sign up at OpenWeather and get an API key.
Create .env File:

Create a .env file in the root directory and add your API key:
REACT_APP_WEATHER_API_KEY=your_api_key_here

Run the Application:
npm start

Access the Application:
Open your browser and go to http://localhost:3000.

Approach:
State Management: Utilized React's useState for managing input and weather data.
API Integration: Used axios to make asynchronous requests to the Open Weather API.
Conditional Rendering: Implemented conditional rendering to handle different states such as loading, error, and displaying data.
Dark Mode Toggle: Used React state to manage and toggle between dark mode and light mode.
Responsive Design: Applied CSS flexbox and media queries for responsiveness.

Known Issues or Limitations:
Error Handling: Currently, the app displays an alert for city not found but can be improved for better user feedback.
Limited Weather Details: Additional weather details like wind speed and weather description can be added for more comprehensive information.






