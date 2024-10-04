import axios from "axios";
import QueryString from "qs";

const CALENDARIO_SERVICO_URL = window.origin.includes("localhost") ? "http://localhost:8080" : "http://calendario-api.herokuapp.com/";

export const calendarioServicoClient = axios.create({
  baseURL: CALENDARIO_SERVICO_URL,
  withCredentials: true,
  paramsSerializer: (params) => QueryString.stringify(params, { arrayFormat: "repeat" }),
  headers: {
    "X-Dispositivo": "WEB",
    //Definir aqui o idioma do usuário
    "Accept-Language": "pt",
  },
});
