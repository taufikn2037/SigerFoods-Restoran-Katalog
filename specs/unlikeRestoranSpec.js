import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoranIdb from '../src/scripts/data/favorite-restoran-idb';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoranIdb.putRestoran({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoranIdb.deleteRestoran(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoranIdb.getAllRestoran()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });
    await FavoriteRestoranIdb.deleteRestoran(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoranIdb.getAllRestoran()).toEqual([]);
  });
});
