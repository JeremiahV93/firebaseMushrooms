import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMycologists = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologist.json`)
    .then((response) => {
      const mycologistObjects = response.data;
      const mycologists = [];
      Object.keys(mycologistObjects).forEach((mycologistId) => {
        mycologistObjects[mycologistId].id = mycologistId;
        mycologists.push(mycologistObjects[mycologistId]);
      });
      resolve(mycologists);
    })
    .catch((err) => reject(err));
});

const getMycologistById = (mycologistId) => axios.get(`${baseUrl}/mycologist/${mycologistId}.json`);

const addMycologist = (newMycologistObj) => axios.post(`${baseUrl}/mycologist.json`, newMycologistObj);

export default { getMycologists, getMycologistById, addMycologist };
