// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import "./App.css"; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className="UnifyDocs">UnifyDocs</h1>
        <Login />
      </div>
    </Provider>
  );
};

export default App;
