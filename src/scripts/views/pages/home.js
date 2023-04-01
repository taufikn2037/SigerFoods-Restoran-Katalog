import RestoranDbSource from '../../data/restorandb-source';
import { createRestoranItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="latext">
            <h1 tabindex="0">Explore Restaurant</h1>
            <div class="list" id="data"></div>
        </div>
      `;
  },

  async afterRender() {
    const restorans = await RestoranDbSource.homeRestoran();
    const restoransContainer = document.querySelector('#data');
    restorans.forEach((restoran) => {
      restoransContainer.innerHTML += createRestoranItemTemplate(restoran);
    });
  },
};

export default Home;
