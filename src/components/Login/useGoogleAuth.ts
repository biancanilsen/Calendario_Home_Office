import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isEmailCadastradoPreviamente } from "../../services/UsuarioService";

interface UseGoogleAuthReturn {
  loginWithGoogle: () => void;
}

interface UseGoogleAuthProps {
  showToastError: (message: string) => void;
}

export const useGoogleAuth = ({ showToastError }: UseGoogleAuthProps): UseGoogleAuthReturn => {
  const navigate = useNavigate();

  const verificarEmailCadastrado = async (email: string) => {
    return isEmailCadastradoPreviamente(email);
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });

        const userEmail = userInfo.data.email;

        const emailExiste = await verificarEmailCadastrado(userEmail);
        if (emailExiste) {
          navigate("/calendar");
        } else {
          showToastError("Este email não está autorizado a acessar. Entre em contato com o administrador.");
        }
      } catch (error) {
        console.error("Erro ao processar o login com Google:", error);
        showToastError("Este email não está cadastrado no sistema.");
      }
    },
    onError: () => {
      showToastError("Erro ao tentar login com Google. Tente novamente.");
    },
  });

  return { loginWithGoogle };
};
