## Description
This is a blogging website created using Next.js and using Firebase's Firestore as a realtime database.

## Getting Started
To get started with Codify, follow these steps:

* ### Clone the repository

```
git clone https://github.com/your-username/codify.git
```

* ### Install Dependencies
After cloning the repository, navigate to the project directory and install the required dependencies:

```
cd codify
npm install
```

* ### Set Up Firebase:

1. Create a Firebase project on the Firebase Console.
2. Create a web app in your project.
3. Replace the Firebase configuration in the project with your own. You can usually find this configuration in the Firebase settings of your web app.
<br>
You can do that by creating `.env.local` file in your projects root directory and adding the below values:
<br>

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

* Start the Development Server:

Once you have set up Firebase, you can start the development server:

```
npm run dev
```

This will launch the Next.js development server and your application will be accessible at http://localhost:3000.

## Preview
![codify](https://github.com/ayeshag7/codify/assets/106478752/255a093d-6e31-498e-8641-f2150dc2f0e7)
