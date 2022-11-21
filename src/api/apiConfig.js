const apiConfig = {
  baseUrl: "http://api.themoviedb.org/3/",
  apiKey: "38923148a593372ceff8d77caf1aca40",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
