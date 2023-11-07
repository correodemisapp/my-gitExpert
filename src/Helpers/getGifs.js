
export const getGifs = async (category) => {
    try {
      const apiKey = 'FyIoRLAdZxZfstRE23z7dSxVaAvXqxBB';
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
      const resp = await fetch(url);
      const { data } = await resp.json();

      console.log(data)
  
      const gifsData = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height.url,
      }));
  
      return gifsData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };