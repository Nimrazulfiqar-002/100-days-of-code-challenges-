import React from 'react';
import img13 from '../asset/img13.jpg';

function DiscoverSection() {
  return (
    <section class="container_page_four">
    <div class="page_text">
      <div class="text_part  mobile-4">
        <h1 class="title_story fourth ">
          Discover the True Meaning of Taste
        </h1>
        <p class="four_size">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          quo cumque deleniti soluta cupiditate voluptatem adipisci
          tempore facilis facere. Nihil, ducimus exercitationem molestiae
          placeat dolore beatae reprehenderit quisquam sit omnis.
          Repellendus laudantium, tempore iste fugit sequi aperiam, nulla
          alias natus maxime voluptatem dolorem deserunt odio eum amet
          provident.
        </p>
        <button class="main_btn">Book A Table</button>
      </div>
    </div>
    <div class="page_picture">
      <img src={img13} alt="restaurant Image" class="restaurant-image-class" />
    </div>
  </section>
  );
}

export default DiscoverSection;