import Axios from 'axios';

const clienteAxios = Axios.create({
  baseURL: 'http://localhost:3000',
});

export default clienteAxios;
