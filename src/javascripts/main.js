import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import myNavBar from './components/auth/myNavBar/myNavBar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLogInStatus();
  auth.loginButton();
  myNavBar.logoutEvent();
};

init();
