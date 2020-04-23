/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import '../assets/styles/Home.scss';
import Search from '../components/Search';
import Categorie from '../components/Categorie';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
import clienteAxios from '../config/axios';

const Home = () => {
  //Tambien se los puede crear en una carpeta aparte dentro de una funcion y retornando "videos", luego se lo exporta aqui y listo.
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    clienteAxios.get('/initalState')
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //Hasta aqui.

  return videos.length === 0 ? null : (
    <>
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
    </>
  );

};

export default Home;
