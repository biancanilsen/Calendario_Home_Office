import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/UsuarioService";

export function useLoginPage(showToastError: (message: string) => void) {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async (username: string, password: string) => {
    let hasError = false;

    setEmailError("");
    setPasswordError("");

    if (!username) {
      setEmailError("O campo de e-mail é obrigatório.");
      hasError = true;
    }

    if (!password) {
      setPasswordError("O campo de senha é obrigatório.");
      hasError = true;
    }

    if (hasError) {
      return false;
    }

    try {
      const response = await login(username, password);
      if (response) {
        navigate("/calendar");
        return true;
      }
    } catch (error: any) {
      console.error("Erro durante o login:", error);

      if (error.response && error.response.status === 401) {
        showToastError("Email ou senha incorretos.");
      } else if (error.response && error.response.status === 403) {
        showToastError("Acesso negado. Verifique suas credenciais.");
      } else {
        showToastError("Erro ao tentar efetuar login. Tente novamente.");
      }
    }
    return false;
  };

  return {
    handleLogin,
    emailError,
    passwordError,
  };
}
