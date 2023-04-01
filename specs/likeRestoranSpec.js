import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoranIdb from '../src/scripts/data/favorite-restoran-idb';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restoran = await FavoriteRestoranIdb.getRestoran(1);

    expect(restoran).toEqual({ id: 1 });
    FavoriteRestoranIdb.deleteRestoran(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });
    await FavoriteRestoranIdb.putRestoran({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoranIdb.getAllRestoran()).toEqual([{ id: 1 }]);
    FavoriteRestoranIdb.deleteRestoran(1);
  });
});
