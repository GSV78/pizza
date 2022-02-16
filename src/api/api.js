import * as axios from 'axios';

const instance = axios.create({
  baseURL: process.env.PUBLIC_URL,
});

export const getPizzasFromServer = () => {
  return instance.get('db.json').then((responce) => responce.data);
};
