# KSP Wikipedia Search

A simple Wikipedia search web application that fetches search results from an API and displays them in a user-friendly format.

## Features
- Live search functionality
- Displays results with title, link, and description
- Responsive and clean UI
- Uses Bootstrap for styling
- Fetches data from an external API

## Technologies Used
- HTML
- CSS (Bootstrap)
- JavaScript (Fetch API)

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/yourrepository.git
   ```
2. Navigate to the project folder:
   ```sh
   cd yourrepository
   ```
3. Open `index.html` in a browser to run the application.

## API Used
This project fetches search results from the following API:
```
https://apis.ccbp.in/wiki-search?search=<query>
```

## How It Works
1. Users enter a search term in the input box.
2. Press `Enter` to trigger the search.
3. The application makes an API request to fetch relevant Wikipedia search results.
4. Results are displayed with titles, links, and descriptions.
5. A loading spinner appears while data is being fetched.

## File Structure
```
/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── index.js        # JavaScript logic
└── README.md       # Project documentation
```

## Contributing
Feel free to fork this repository and submit pull requests with improvements or bug fixes.

## License
This project is open-source and available under the [MIT License](LICENSE).
