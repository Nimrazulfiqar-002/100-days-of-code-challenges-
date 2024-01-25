import React from 'react';
import img19 from '../asset/img19.jpg';
import img20 from '../asset/img20.jpg';
import img21 from '../asset/img21.jpg';

function ChefSection() {
  return (
    <section class="container_page_six">
        <div class="items upper">
          <div class="page_heading">
            <h1 class="title_today">Our Chef</h1>
            <p class="today_para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deserunt omnis.
            </p>
          </div>
        </div>
        <div class="chef_profile_one">
          <div class="chef_profile_picture">
            <img src={img19} alt="chef-picture" class="chef_picture_class" />
          </div>
          <div class="profile_text">
            <h3>Albert C. Miller</h3>
            <p class="opacity">Station Chef</p>
          </div>
        </div>
        <div class="chef_profile_two">
          <div class="chef_profile_picture">
            <img src={img21} alt="chef-picture" class="chef_picture_class" />
          </div>
          <div class="profile_text">
            <h3>Albert C. Miller</h3>
            <p class="opacity">Head Chef</p>
          </div>
        </div>
        <div class="chef_profile_three">
          <div class="chef_profile_picture">
            <img src={img20} alt="chef-picture" class="chef_picture_class" />
          </div>
          <div class="profile_text">
            <h3>Albert C. Miller</h3>
            <p class="opacity">Pastry Chef</p>
          </div>
        </div>
      </section>
  );
}

export default ChefSection;
