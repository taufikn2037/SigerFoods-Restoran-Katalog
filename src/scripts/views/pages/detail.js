import UrlParser from '../../routes/url-parser';
import RestoranDbSource from '../../data/restorandb-source';
import { createRestoranDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="restoran_detail" class="restoran_detail"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoran = await RestoranDbSource.detailRestoran(url.id);
    const restoranContainer = document.querySelector('#restoran_detail');
    restoranContainer.innerHTML = createRestoranDetailTemplate(restoran);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: restoran.id,
        name: restoran.name,
        rating: restoran.rating,
        city: restoran.city,
        description: restoran.description,
        pictureId: restoran.pictureId,
      },
    });
  },
};

export default Detail;
