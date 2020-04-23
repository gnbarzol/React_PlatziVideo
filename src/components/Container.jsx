/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from './Header';
import Search from './Search';
import Categorie from './Categorie';
import Carrousel from './Carrousel';
import CarrouselItem from './CarrouselItem';
import Footer from './Footer';

const Container = ({ videos }) => {

  return videos.length === 0 ? null : (
    <div>
      <Header />
      <Search />
      {videos.mylist?.length > 0 && (
        <Categorie title='Mi Lista'>
          <Carrousel>
            {videos.mylist.map((item) => (
              <CarrouselItem key={item.id} {...item} />
            ))}
          </Carrousel>
        </Categorie>
      )}

      <Categorie title='Tendencias'>
        <Carrousel>
          {videos.trends.map((item) => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categorie>

      <Categorie title='Originales'>
        <Carrousel>
          {videos.originals.map((item) => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categorie>

      <Footer />
    </div>
  );
};

export default Container;
