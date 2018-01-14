import axios from 'axios';
import store from '../store';
import { URL, LOCALHOST, MFAL, CREATE_MFAL } from '../config/Api';
import { login } from '../util/Auth';

// const api = axios.create({
//   baseURL: URL,
//   headers: {'Authorization': 'JWT ' + token}
// });

export const apiClient = (token) => {

  const instance = axios.create({
    baseURL: LOCALHOST,
    timeout: 1000,
    headers: {
      "Authorization": 'JWT ' + token,
    },
  });

  // console.log(instance);

  instance
    .get(MFAL)
      .then((response) => {
        console.log('id', response.data[0].id);
      })
      .catch((error) => console.log(error));

  // instance
  //   .post(CREATE_MFAL, {
  //     name: "Aire Acondicionado 3",
  //     mfal_code: "AC--D"
  // })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

};

export const getMfals = () => {
  login('rodo', 'tesla123')
    .then(() => {
      const token = store.getState().token;
      apiClient(token);
    });
};
