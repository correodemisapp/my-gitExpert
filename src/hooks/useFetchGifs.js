import { useState, useEffect } from 'react';
import { getGifs } from '../Helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener GIFs:', error);
        setIsLoading(false);
        setImages([]); // Puedes establecer images como un array vacío en caso de error.
      }
    };

    fetchImages();
  }, [category]);

  return { images, isLoading };
};

 