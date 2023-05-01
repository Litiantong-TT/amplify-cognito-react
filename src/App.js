// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';

// Amplify.configure(awsconfig);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>My App Content</h2>
//       </header>
//     </div>
//   );
// }

// export default withAuthenticator(App);

import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}