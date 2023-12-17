// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
// import store from './store';
import Login from './components/Login';
import "./App.css"; 
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import TextEditor from './components/textEditor';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {

  const router =createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path = "/dashboard" element={<Dashboard />} />
      <Route path = "/documents/:docId" element={<TextEditor />}/>
    </>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};
export default App;


