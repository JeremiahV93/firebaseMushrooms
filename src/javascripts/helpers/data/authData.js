import firebase from 'firebase/app';
import 'firebase/auth';

import mushroomList from '../../components/mushroomList/mushshroom';
import mycologistList from '../../components/mycologistList/mycologistList';
// import singleMycoDiv from '../../components/singleMycologist/singleMyco';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const singleMycDiv = $('#single-myco');
const hutDiv = $('#hut');

const logoutButton = $('#nav-logout-button');

const checkLogInStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      hutDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      $('#new-Shroom').removeClass('hide');

      mushroomList.buildForest();
      mycologistList.buildVillage();
      singleMycDiv.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
      $('#new-Shroom').addClass('hide');
    }
  });
};

export default { checkLogInStatus };
