# Form Creation and Validation

A simple and robust form validation system built with vanilla JavaScript. This project demonstrates client-side form validation using basic JavaScript string methods and DOM manipulation.

## Features

- Real-time form validation
- Input validation for:
  - Username (minimum 3 characters)
  - Email (must contain '@' and '.')
  - Password (minimum 8 characters)
- Clear error messaging
- Success/error feedback display
- Responsive design

## Project Structure

```
Form-Creation-Validation/
├── index.html          # Main HTML file with form structure
├── style.css          # CSS styles for the form and feedback
├── script.js          # JavaScript validation logic
└── README.md          # Project documentation
```

## Implementation Details

### Form Validation Rules

1. **Username**
   - Must be at least 3 characters long
   - Whitespace is trimmed from both ends

2. **Email**
   - Must contain '@' symbol
   - Must contain '.' symbol
   - Basic email format validation

3. **Password**
   - Must be at least 8 characters long
   - Whitespace is trimmed from both ends

### Error Handling

- Form submission is prevented if validation fails
- Clear error messages are displayed for each validation failure
- Success message is shown when all validations pass
- Console error logging for debugging purposes

## Usage

1. Clone the repository
2. Open `index.html` in a web browser
3. Fill out the form and submit
4. View validation feedback

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Improvements

- Add more complex password requirements
- Implement real-time validation as user types
- Add custom validation rules
- Support for additional input types

## Data Fetching and Display

This project also includes functionality to fetch user data from a public API and display it as a list on a separate webpage.

### Implementation Details

- Asynchronously fetches user data from `https://jsonplaceholder.typicode.com/users`.
- Displays user names in an unordered list (`<ul>`).
- Includes error handling to gracefully manage API call failures.
- Ensures data fetching occurs after the DOM is fully loaded.

### Files Involved

- `fetch-data.html`: HTML structure for displaying the user list.
- `fetch-data.css`: Styling for the user list page.
- `fetch-data.js`: JavaScript logic for fetching and displaying data.

## Usage (Data Fetching)

1. Open `fetch-data.html` in a web browser.
2. The script will automatically fetch and display the user list.
3. Observe error messages if data fetching fails.