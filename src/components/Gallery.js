import React from 'react';
import img24 from '../asset/img24.jpg';
import img25 from '../asset/img25.jpg';
import img10 from '../asset/img10.jpg';
import img23 from '../asset/img23.jpg';

function GallerySection() {
  return (
    <section class="container_page_seven">
        <div class="items upper">
          <div class="page_heading">
            <h1 class="title_today white">Gallery</h1>
            <p class="today_para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="gallery_container_one">
          <img src={img24} alt="picture" class="gallery_pciture_class" />
        </div>
        <div class="gallery_container_two">
          <img src={img25} alt="picture" class="gallery_pciture_part_class" />
        </div>
        <div class="gallery_container_three">
          <img src={img10} alt="picture" class="gallery_pciture_part_class" />
        </div>
        <div class="gallery_container_four">
          <img src={img23} alt="picture" class="gallery_pciture_class" />
        </div>
      </section>
  );
}

export default GallerySection;
