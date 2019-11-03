# Jobboard(Frontend)

## What is Jobboard?
Is a Job Panel created for learning purpose using Laravel(in the backend) and Vue(in the frontend).

So as you might have noticed the project consists of two parts, the backend and the frontend, you can find the links to both repositories below:

-	[Frontend Jobboard]( https://github.com/benjaminvar/simple-jobboard-frontend.git)
-	[Backend Jobboard](https://github.com/benjaminvar/simple-jobboard-backend.git)

## Features

- For a user:
  1. Home
  2. Search
  3. Application
  4. Contact
  5. About
  
- For a company:
  1. Full Auth (with Social Auth): Login, Logout, Register, Forgot Password and Reset Password
  2. Company: update Company information and password.
  3. Job offers: View, Search, Create, Update and Delete Job Offers.
  4. Applications: View and Search.


## How to run it?

### Clone the project
```
git clone https://github.com/benjaminvar/simple-jobboard-frontend.git
```

### Set up configuration file
```
cp .env.example .env
```

### Edit settings

Add the corresponding information to the .env file so that the app can work correctly
```
VUE_APP_GOOGLE_CAPTCHA_CLIENT_ID=<Your Google Captcha API Client ID>
VUE_APP_FACEBOOK_CLIENT_ID=<Your Facebook API Client ID>
VUE_APP_FACEBOOK_CLIENT_REDIRECT_URI=<Your Facebook API Redirect Client URL>
VUE_APP_GOOGLE_CLIENT_ID=<Your Google API Client ID>
VUE_APP_GOOGLE_CLIENT_REDIRECT_URI=<Your Google API Redirect Client URL>
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```