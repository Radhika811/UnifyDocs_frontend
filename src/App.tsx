// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import "./App.css"; 
import SearchAppBar from './components/navbar';
import MediaCard from './components/documentcard';
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import TextEditor from './components/textEditor';
import Dashboard from './components/Dashboard';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

const App: React.FC = () => {

  const router =createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path = "/dashboard" element={<Dashboard />} />
      <Route path = "/documents/:documentId" element={<TextEditor />}/>
    </>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );

  

// const App = () => {
//   // Set the basename to the desired base URL
//   const basename = '/my-app';

//   return (
//     <BrowserRouter basename={"http://localhost:8000"}>

//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/documents/:documentId" element={<TextEditor />} />
//     </BrowserRouter>
//   );
// };

// export default App;

  // return (
  //   <Provider store={store}>
  //     <div>
  //       <div><SearchAppBar /></div>
  //       <div className='MediaCard'> 
  //         <div className='Card'><MediaCard /> </div>
  //         <div className='Card'><MediaCard /> </div>
  //       </div>
  //       <Login />
  //     </div>
  //   </Provider>
  // );
};
export default App;

