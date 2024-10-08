import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEmailCadastradoPreviamente } from "../../services/UsuarioService";

export function useEsquececeuSenhaPage(showToastError: (message: string) => void) {
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleEnviarEmail = async (email: string) => {
    let hasError = false;

    setEmailError("");

    if (!email) {
      setEmailError("O campo de e-mail é obrigatório.");
      hasError = true;
    }

    if (hasError) {
      return false;
    }

    try {
      const response = await isEmailCadastradoPreviamente(email);
      if (response === true) {
        navigate("/calendar");
        return true;
      }
    } catch (error: any) {
      console.error("Erro durante o envio de email:", error);

      if (error.response && error.response.status === 401) {
        showToastError("Email ou senha incorretos.");
      } else if (error.response && error.response.status === 403) {
        showToastError("Acesso negado. Verifique suas credenciais.");
      } else {
        showToastError("Erro. Tente novamente.");
      }
    }
    return false;
  };

  return {
    handleEnviarEmail,
    emailError,
  };
}
