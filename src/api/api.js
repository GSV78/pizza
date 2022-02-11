import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getPizzasFromServer = () => {
  return instance.get('db.json').then((responce) => responce.data);
};
