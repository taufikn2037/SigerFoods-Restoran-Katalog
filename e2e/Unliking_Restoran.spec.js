const assert = require('assert');

Feature('Unliking Restoran');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('.list_item');
});

Scenario('unliking one restaurant', async ({ I }) => {
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
  I.waitForElement('.list_item');
  I.seeElement('.list_item');
  const unlikedRestaurantsTitles = await I.grabTextFrom('.list_item a');

  assert.strictEqual(firstRestaurantTitle, unlikedRestaurantsTitles);

  I.seeElement('.list_item a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.list_item');
});
