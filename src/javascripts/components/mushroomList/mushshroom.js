import mushroomData from '../../helpers/data/mushroomData';
import utils from '../../helpers/utils/utils';
import mushroomComponent from '../mushroom/mushroom';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      console.error('get works', mushrooms);
      let domString = `
      <h2 class="text-center">Forest</h2>
      <div class="d-flex flex-wrap">
      `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';
      utils.printToDom('#forest', domString);
    })
    .catch((err) => console.error('bad stuff', err));
};

export default { buildForest };
