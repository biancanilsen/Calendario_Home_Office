import { calendarioServicoClient } from "../config/api/http-client";

// implementar no backend o login
export const login = async (email: string, password: string) => {
  const response = await calendarioServicoClient.post("/login", {
    email,
    password,
  });
  return response.data;
};

// implementar no backend o logout
export const logout = async () => {
  const response = await calendarioServicoClient.post("/logout");
  return response.data;
};

export const cadastrarUsuario = async (nome: string, email: string, senha: string) => {
  // try catch?
  const response = await calendarioServicoClient.post("/api/usuarios/register", {
    nome,
    email,
    senha,
  });
  return response.data;
};
