# ticktock

This is a revolutionary time tracking app


## Dev Setup

### Prerequisite
#### 1. Install latest node
Node.js (Latest version): You can download it from [Node.js Download Page](https://nodejs.org/en/download/current)
#### 2. Clone the Repository
First, pull the source code to your local machine by running the following command in your terminal:

```bash
git clone https://github.com/gomese03/ticktock.git
```

### Run backend
- navigate to the `/server` folder in a command line terminal
- run `npm ci` to install all required dependencies
- to start the server run `node index.js`

### Run frontend
- open a  command line terminal in the root directory of the project
- run `npm ci` to install requied dependencies
- run `npm run dev` to start the frontend
- access the UI with `http://http://localhost:5173/` in the browser

## Tech stack

Frontend: ReactJs with Vite, Javascipt, Tailwind
Backend: Node.js with express server
Hosting: S3 hosting bucket, Route53, Cloudfront

## Notes
### Implementation details
Login with the credentials provided.
Dashboard table is populated with a response from an API.
Clicking a row will open the details page. Details are fetched from an API for each row.
Clicking on Add new will open a modal.
Clicking on the 'ticktock' div in navbar will navigate to dashboard.
Logout option is available in the navbar on clicking the username.

### Not implemented
User session management and user details (hardcoded)
Component abstraction
Filter and pagination implementation
Progress bar on details page
Week dates on details page (hardcoded)
Pixel perfect CSS
Authenticated APIs
POST/PUT APIs
Database
Unit tests

*the code running locally gets the API response from the server. The app deployed at https://ticktock.gomese.com/ is running with mock APIs and not from an actual backend server

### Known Issues
1) Refreshing the page from the login landing page will an access denied error
