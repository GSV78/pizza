import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://GSV78.github.io/pizza',
});

export const getPizzasFromServer = () => {
  return instance.get('db.json').then((responce) => responce.data);
};
