import { Box, Grid, Link, Typography } from "@mui/material";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import Usuario from "../../assets/Usuario.svg";
import Chave from "../../assets/icons/Chave.svg";
import SetaEsquerda from "../../assets/icons/SetaEsquerda.svg";
import Toast from "../../components/Toast/Toast";
import { colors } from "../../config/theme/colors";
import { useEsquececeuSenhaPage } from "./useEsqueceuSenhaPage";

type ToastType = "success" | "error";

export default function EsqueceuSenhaPage() {
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<ToastType>("success");

  const showToastError = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const { handleEnviarEmail, emailError } = useEsquececeuSenhaPage(showToastError);

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Toast message={toastMessage} type={toastType} show={showToast} onClose={() => setShowToast(false)} />

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "80%", maxWidth: 400, position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <Box
              sx={{
                padding: "10px",
                border: `1px solid ${colors.grey}`,
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <img src={Chave} alt="Logo" style={{ width: "28px", height: "28px" }} />
            </Box>
          </Box>
          <Typography fontSize={"28px"} fontWeight="544" sx={{ marginBottom: "8px", textAlign: "center", color: colors.black }}>
            Esqueceu a senha?
          </Typography>

          <Typography fontSize={"16px"} sx={{ marginBottom: "32px", textAlign: "center", color: colors.grey }}>
            Não se preocupe, estamos aqui para lhe ajudar.
          </Typography>

          <Box sx={{ marginBottom: "24px", position: "relative" }}>
            <Input label="E-mail corporativo" placeholder="Digite seu e-mail" fullWidth onChange={(e) => setEmail(e.target.value)} value={email} required />
            <Typography
              sx={{
                color: "red",
                fontSize: "12px",
                position: "absolute",
                top: "100%",
                left: "0",
                marginTop: "2px",
              }}
            >
              {emailError}
            </Typography>
          </Box>

          <Button
            style={{
              backgroundColor: colors.primary,
              color: colors.white,
              borderRadius: "12px",
              padding: "10px 0",
              marginBottom: "32px",
            }}
            fullWidth
            onClick={() => handleEnviarEmail(email)}
          >
            Redefinir senha
          </Button>

          <Box sx={{ textAlign: "center", width: "100%", marginTop: "15px" }}>
            <Link href="/" underline="none" color="primary" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={SetaEsquerda} alt="Voltar" style={{ width: "12px", height: "12px", marginRight: "8px" }} />
              <Typography variant="body2" color={colors.grey}>
                Voltar para a página inicial
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: "linear-gradient(211.4deg, #1570EF 0%, #3D5CA5 100%)",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "40px" }}>
          <img src={Usuario} alt="Login illustration" style={{ width: "100%", maxWidth: "600px" }} />
        </Box>
      </Grid>
    </Grid>
  );
}
