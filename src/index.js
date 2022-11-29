import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <ChatContextProvider>
    <App />
    </ChatContextProvider>
  </ContextProvider>
);

