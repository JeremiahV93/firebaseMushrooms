import utils from '../../helpers/utils/utils';
import mushroomData from '../../helpers/data/mushroomData';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((response) => console.error('get works', response.data))
    .catch((err) => console.error('bad stuff', err));
  const domString = 'I see it!';
  utils.printToDom('#forest', domString);
};

export default { buildForest };
