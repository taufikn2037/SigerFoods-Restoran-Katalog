import FavoriteRestoranIdb from '../data/favorite-restoran-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restoran }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoran = restoran;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restoran;

    if (await this._isRestoranExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoranExist(id) {
    const restoran = await FavoriteRestoranIdb.getRestoran(id);
    return !!restoran;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoranIdb.putRestoran(this._restoran);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoranIdb.deleteRestoran(this._restoran.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
