import * as axios from 'axios';

const instance = axios.create({
  baseURL: '',
});

export const getPizzasFromServer = () => {
  return instance.get('db.json').then((responce) => responce.data);
};
