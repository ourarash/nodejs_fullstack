# nodejs_fullstack

A full stack project starter code for NodeJS.

<img alt="Diagram" src="https://github.com/ourarash/nodejs_fullstack/blob/master/diagram.png?raw=true" width="400" text-align="center">

- The frontend is a simple web page that takes to numbers: `min_value` and `max_value` and sends it to the backend using HTTP GET request.
- The backend is a simple NodeJS server that processes the HTTP GET request, reads the parameters `min_value` and `max_value` and generates a random value between these two numbers and returns the result back to the frontend.


By default frontend listens on port 3000, and backend listens on port 5000.

# Install NodeJS

You can install NodeJs from [here](https://nodejs.org/en/download/).

# Running this package

To download and install:

```bash
git clone https://github.com/ourarash/nodejs_fullstack.git
cd nodejs_fullstack
npm install
```

## Running Backend:
```bash
cd backend
node app.js
```

You can test backend by installing and running [Postman](https://www.postman.com/downloads/):

<img alt="Backend" src="https://github.com/ourarash/nodejs_fullstack/blob/master/backend/screenshot.png?raw=true" width="400">


## Running Frontend:
```bash
cd frontend
node app.js
```

Then open your browser to http://localhost:3000:

<img alt="Frontend" src="https://github.com/ourarash/nodejs_fullstack/blob/master/frontend/screenshot.png?raw=true" width="400">