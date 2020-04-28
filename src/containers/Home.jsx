/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Home.scss';
import Search from '../components/Search';
import Categorie from '../components/Categorie';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
import clienteAxios from '../config/axios';

const Home = ({ myList, trends, originals }) => {
  //Tambien se los puede crear en una carpeta aparte dentro de una funcion y retornando "videos", luego se lo exporta aqui y listo.
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   clienteAxios.get('/initalState')
  //     .then((response) => {
  //       setVideos(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  //Hasta aqui.

  return (
    <>
      <Search />
      {myList?.length > 0 && (
        <Categorie title='Mi Lista'>
          <Carrousel>
            {myList.map((item) => (
              <CarrouselItem key={item.id} {...item} isList />
            ))}
          </Carrousel>
        </Categorie>
      )}

      <Categorie title='Tendencias'>
        <Carrousel>
          {trends.map((item) => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categorie>

      <Categorie title='Originales'>
        <Carrousel>
          {originals.map((item) => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categorie>
    </>
  );

};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
}

export default connect(mapStateToProps, null)(Home);
