import axios from "axios";
import { useState } from "react";
import { cadastrarUsuario } from "../../services/UsuarioService";

export function useRegister(onSuccess?: (message: string) => void, onError?: (message: string) => void) {
  const [usernameError, sectUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [empresaError, setEmpresaError] = useState("");

  const handleRegister = async (nome: string, email: string, senha: string, empresa: string) => {
    let hasError = false;

    setEmailError("");
    setPasswordError("");

    if (!nome) {
      sectUsernameError("O campo de nome é obrigatório.");
      hasError = true;
    }

    if (!email) {
      setEmailError("O campo de email é obrigatório.");
      hasError = true;
    }

    if (!senha) {
      setPasswordError("O campo de senha é obrigatório.");
      hasError = true;
    }

    if (!empresa) {
      setEmpresaError("O campo de empresa é obrigatório.");
      hasError = true;
    }

    if (hasError) {
      return false;
    }

    try {
      await cadastrarUsuario(nome, email, senha);
      if (onSuccess) {
        onSuccess("Usuário cadastrado com sucesso!");
      }
    } catch (error: any) {
      if (onError) {
        let errorMessage = "Erro ao cadastrar usuário. Tente novamente.";

        if (axios.isAxiosError(error) && error.response) {
          errorMessage = error.response.data?.message || errorMessage;
        }

        onError(errorMessage);
      }
    }
  };

  return {
    handleRegister,
    usernameError,
    emailError,
    passwordError,
    empresaError,
  };
}
