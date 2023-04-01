const assert = require('assert');

Feature('Liking Restoran');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('.list_item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.list_item');
  I.amOnPage('/');
  I.waitForElement('.list_item');
  I.seeElement('.list_item');

  const firstRestaurant = locate('.list_item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');
  const likedRestaurantTitle = await I.grabTextFrom('.list_item a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
