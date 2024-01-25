import React from 'react';
import Header from './components/Header';
import MainHeroPage from './components/MainHeroPage';
import OurStorySection from './components/OurStory';
import TodaySection from './components/TodaysSpecial';
import ChefSection from './components/ChefSection';
import DiscoverSection from './components/DiscoverSection';
import GallerySection from './components/Gallery';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="container">
      <Header />
      <MainHeroPage />
      <OurStorySection />
      <TodaySection />
      <ChefSection />
      <DiscoverSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}

export default App;
