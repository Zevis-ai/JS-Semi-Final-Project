# Encyclopedia/Atlas Countries Project
![ my-glob](assets/img/my_glob-removebg-preview.png)
## Description
visit [here](https://zevis-ai.github.io/JS-Semi-Final-Project/)

This project focuses on displaying information about various countries worldwide using the restcountries API and free map services like Google Maps or Leaflet. The user can search for a country by name, retrieve information about it, and view its map using geographical coordinates. Additionally, neighboring countries are displayed with their respective codes.

### Requirements:
- Free API for country data: [restcountries API](https://restcountries.com)
- Free map service to display geographic locations, such as Google Maps or Leaflet.

## Features:
1. Country Search - Users can search for a country by name.
2. Country Information:
    - Country Flag
    - Capital City
    - Population
    - Official Languages
3. Country Map - A map of the country is shown using Google Maps or Leaflet, with the zoom set to display the entire country.
4. Neighboring Countries - Displaying the country codes of neighboring countries with links to their pages.

## How it works:

### API:
- The restcountries API allows fetching country information by name, country code, or geographic region.
- The data returned by the API includes the country's name, flag, capital city, population, languages, and geographic data (like coordinates).

### Search:
- Users can search for a country by name.
- If the country exists, it will display details including flag, capital city, population, and languages.
- If the country is not found, a message saying "Country not known" will be shown.

### Neighboring Countries:
- After displaying the country, neighboring countries' country codes (or names) will be shown.
- Clicking on a country code/name will display the corresponding country’s page.

### Map:
- The map is displayed with the country's coordinates.
- The map zoom will be set to show the entire country (e.g., if the user searches for France, the map will show all of France).

## Technologies:
- HTML and CSS for page design.
- JavaScript (ES6) with modules and Async/Await for API interaction and various functions.
- Google Maps or Leaflet for displaying the country's map.
- restcountries API for fetching country information.

## How to Run the Project:
1. Clone the repository from GitHub.
2. Install the required dependencies.
3. Run the project locally or deploy it on Netlify to run the app online.
4. You can search for countries and instantly see the information and maps.

## Development Steps:
1. API Integration - Fetch country data.
2. Search System - Users will be able to search for a country by name.
3. Display Information - Show flag, capital, population, languages, and a map of the country.
4. Neighboring Countries - Display country codes of neighboring countries and link to their pages.
5. Deploy to Netlify - Deploy the project to Netlify for online access.

## Installation Instructions:
1. Clone the repository from GitHub:
      git clone https://github.com/Zevis-ai/JS-Semi-Final-Project.git
   
2. Install dependencies:
      npm install
   
3. Run the project:
      npm start
   
4. Open the app in your browser.

## Future Improvements:
- Add more filters, such as population or region.
- Enhance user experience with additional design elements.
  
## About:
This project was created by Zevi Friedman as a personal project for learning and practicing JavaScript and API integration.