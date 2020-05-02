import React from 'react';
import '../assets/styles/App.scss';
import Header from '../componets/Header';
import Search from '../componets/Search';
import Categories from '../componets/Categories';
import Carousel from '../componets/Carousel';
import CarouselItem from '../componets/CarouselItem';
import Footer from '../componets/Footer';
import useInitialState from '../hooks/useInitalState';

const API = 'http://192.168.100.141:3000/initialState';
const App = () => {

  const initialState = useInitialState(API);
  return initialState.length === 0 ? (<h1>Loading...</h1>) : (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {initialState.mylist.map((item) => <CarouselItem key={item.id} cover={item.cover} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} />)}
          </Carousel>
        </Categories>
      )}

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} cover={item.cover} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} />)}
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} cover={item.cover} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} />)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};
export default App;
