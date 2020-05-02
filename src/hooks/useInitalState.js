import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  //Estado inicial vacio
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  //useEffect retorna items y una funcion Para actulizar items
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
