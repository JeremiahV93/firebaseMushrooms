import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils/utils';
import mycologistData from '../../helpers/data/mycologistData';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((user) => {
      const newMyco = {
        name: $('#mycoName').val(),
        age: $('#mycoAge').val() * 1,
        uid: user.user.uid,
      };
      mycologistData.addMycologist(newMyco)
        .then(() => {
          console.error(newMyco);
        })
        .catch((err) => console.error('myco didnt work', err));
    })
    .catch((err) => console.error(err));
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-warning"><i class="fab fa-google-plus"></i> LOG ME IN!!!</button>';
  utils.printToDom('#login', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
