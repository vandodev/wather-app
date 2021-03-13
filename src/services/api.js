import axios from 'axios';

//https://api.hgbrasil.com/weather?key=SUA-CHAVE&lat=-23.682&lon=-46.875

export const key ='f34ad9f9';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com'
});

export default api;
