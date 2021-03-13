import axios from 'axios';
//https://api.hgbrasil.com/weather?key=f4f2abd0&lat=-23.682&lon=-46.875&user_ip=remote
//https://api.hgbrasil.com/weather?key=SUA-CHAVE&lat=-23.682&lon=-46.875

export const key ='f4f2abd0';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com',
});

export default api;
