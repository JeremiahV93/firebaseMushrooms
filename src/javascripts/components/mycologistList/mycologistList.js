import mycologistData from '../../helpers/data/mycologistData';
import mycologistComponent from '../mycologist/mycologist';
import utils from '../../helpers/utils/utils';

const buildVillage = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      console.error('it works?', mycologists);
      let domString = `
    <h2 class='text-center'>Village</h2>
    <div class='d-flex flex-wrap'>
    `;
      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });
      domString += '</div>';
      utils.printToDom('#huts', domString);
    })
    .catch((err) => console.error('BADDER STUFF', err));
};

export default { buildVillage };
