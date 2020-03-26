const URL = 'https://api.punkapi.com/v2/';

const getRandom = () => {
  const response = fetch(`${URL}beers/random`).then(res => res.json());
  return response;
}

export const BeerService = {
  getRandom
}