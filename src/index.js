import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store';
// const Index = () => {
//   return <div>Welcome to the Jungle</div>;
// };

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));