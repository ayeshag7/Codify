## Description
A blogging website created using Next.js and Firebase.

## Tools and Technologies:
* Next.js
* Tailwind CSS
* Firebase Cloud Firestore
* Firebase Authentication

## Getting Started
To get started with Codify, follow these steps:

1. ### Clone the repository

```
git clone https://github.com/your-username/codify.git
```

2. ### Install Dependencies
After cloning the repository, navigate to the project directory and install the required dependencies:

```
cd codify
npm install
```

3. ### Set Up Firebase

* Create a Firebase project on the Firebase Console.
* Create a web app in your project.
* Replace the Firebase configuration in the project with your own. You can usually find this configuration in the Firebase settings of your web app.
You can do that by creating `.env.local` file in your projects root directory and adding the below values:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

4. ### Start the Development Server
Once you have set up Firebase, you can start the development server by running the following command:

```
npm run dev
```

This will launch the Next.js development server and your application will be accessible at http://localhost:3000.

## Project Demo
https://codify-iq.netlify.app/
