import React from 'react';

function FooterSection() {
  return (
    <div class="last_container">
    <div class="footer_logo">
      <h1 class="logo">EAT MORE</h1>
    </div>
    <div class="footer_info_one">
      <p class="footer_para">Facebook</p>
      <p class="footer_para">Instagram</p>
      <p class="footer_para">Twitter</p>
    </div>
    <div class="footer_info_two">
      <p class="footer_para">Menu</p>
      <p class="footer_para">Reservations</p>
      <p class="footer_para">Gallery</p>
    </div>
    <div class="footer_info_three">
      <p class="footer_bio">Contact Us</p>
      <p class="footer_bio">Be the first to get our newsletter</p>
      <article class="footer_bio">
        <label for="email">
          <input type="email" id="email" name="email" placeholder="   Enter your email address" />
          <button type="button" class="footer_btn">Subscribe</button>
        </label>
      </article>
    </div>
  </div>
  );
}

export default FooterSection;