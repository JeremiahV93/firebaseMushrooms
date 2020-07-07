import firebase from 'firebase/app';
import 'firebase/auth';

import mushroomList from '../../components/mushroomList/mushshroom';
import mycologistList from '../../components/mycologistList/mycologistList';
// import singleMycoDiv from '../../components/singleMycologist/singleMyco';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const singleMycDiv = $('#single-myco');
const hutDiv = $('#hut');

const logoutButton = $('#navbar-logout-button');

const checkLogInStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.removeClass('hide');
      forestDiv.removeClass('hide');
      hutDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      $('#new-Shroom').removeClass('hide');
      $('#newMyco').addClass('hide');
      $('#google-auth').addClass('hide');

      mushroomList.buildForest();
      mycologistList.buildVillage();
      singleMycDiv.removeClass('hide');
    } else {
      authDiv.addClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
      $('#new-Shroom').addClass('hide');
      $('#newMyco').removeClass('hide');
      $('#google-auth').removeClass('hide');
    }
  });
};

export default { checkLogInStatus };
