import FavoriteRestoranIdb from '../../data/favorite-restoran-idb';
import { createRestoranItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="latext">
            <h1 tabindex="0">Favorite Restaurant</h1>
            <div class="list" id="data"></div>
        </div>
      `;
  },

  async afterRender() {
    const restorans = await FavoriteRestoranIdb.getAllRestoran();
    const restoransContainer = document.querySelector('#data');
    restorans.forEach((restoran) => {
      restoransContainer.innerHTML += createRestoranItemTemplate(restoran);
    });
  },
};

export default Favorite;
