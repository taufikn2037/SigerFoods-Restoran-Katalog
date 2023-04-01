/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestoranItemTemplate = (restoran) => `
    <div tabindex="0" class="list_item">
        <a href="#/detail/${restoran.id}">
            <img tabindex="0" class="list_item_thumb lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" alt="${restoran.name}" title="${restoran.name}">
            <div class="city">${restoran.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    ★ 
                    <span tabindex="0" class="list_item_rating_value">${restoran.rating}</span>
                </p>
                <h1 tabindex="0" class="list_item_title">${restoran.name}</h1>
                <p class="list_item_desc">${restoran.description.slice(0, 150)}...</p>
            </div>
        </a>
    </div>
`;

const createRestoranDetailTemplate = (restoran) => `
  <h1 tabindex="0" class="restoran_title">${restoran.name}</h1>
  <img class="restoran_poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" alt="${restoran.name}" />
  <div tabindex="0" class="restoran_info">
    <h2>Information</h2>
    <h3>Rating</h3>
    <p>${restoran.rating}</p>
    <h3>Alamat</h3>
    <p>${restoran.address}</p>
    <h3>Kota</h3>
    <p>${restoran.city}</p>
    <h3>Kategori</h3>
    <p>${restoran.categories.map((categori) => `${categori.name}`).join(' | ')}</p>
  </div>
  <div tabindex="0" class="restoran_overview">
    <h2>Deskripsi</h2>
    <p>${restoran.description}</p>
  </div>
  <div tabindex="0">
    <h2>Foods</h2>
    <p>${restoran.menus.foods.map((food) => `- ${food.name}`).join('<br>')}</p>
    <h2>Drinks</h2>
    <p>${restoran.menus.drinks.map((drink) => `- ${drink.name}`).join('<br>')}</p>
  </div>
  <div class="restoran_review">
    <h2 tabindex="0" class="review_title">Review</h2>
        ${restoran.customerReviews.map((review) => `
            <div tabindex="0" class="review_value">
                <p class="name_review">${review.name}</p>
                <p class="review_review">${review.review}</p>
                <p class="date_review">${review.date}</p>
            </div>
        `).join('')}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoranItemTemplate, createRestoranDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};
