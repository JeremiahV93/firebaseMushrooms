import mushroomData from '../../helpers/data/mushroomData';
import utils from '../../helpers/utils/utils';
import mushroomComponent from '../mushroom/mushroom';
import newMushroom from '../newMushroom/newMushroom';

const addShroomEvent = (e) => {
  e.preventDefault();
  const newMush = {
    name: $('#mush-name').val(),
    size: $('#mush-size').val(),
    location: $('#mush-location').val(),
    weight: $('#mush-weight').val() * 1,
  };

  console.error(newMush);
  mushroomData.addMushroom(newMush)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
      utils.printToDom('#new-Shroom', '');
    })
    .catch((err) => console.error('didnt work', err));
};

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      let domString = `
      <h2 class="text-center">Forest</h2>
      <button id="show-add-mush" class='btn btn-success'>New Shroom</button>
      <div class="d-flex flex-wrap">
      `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';
      utils.printToDom('#forest', domString);
      $('body').on('click', '#show-add-mush', newMushroom.showForm);
      $('body').on('click', '#mush-creator', addShroomEvent);
    })
    .catch((err) => console.error('bad stuff', err));
};

export default { buildForest };
