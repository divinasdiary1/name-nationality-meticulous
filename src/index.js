import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

async function startApp() {
  if(process.env.NODE_ENV === 'development' ||  process.env.VERCEL_ENV === 'preview') {
    await tryLoadAndStartRecorder({
     projectId: 'dZCe3d9hIPUfFtDqySaQtzsOz7jmTT6hUWcfOUgW',
    });
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

startApp();

