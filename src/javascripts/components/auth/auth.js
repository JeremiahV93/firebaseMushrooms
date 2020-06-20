import utils from '../../helpers/utils/utils';

const signMeIn = () => {
  console.warn('yeah sure doc');
};

const loginButton = () => {

  const domString = '<button id="google-auth" class="btn btn-warning"><i class="fab fa-google-plus"></i> LOG ME IN!!!</button>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
