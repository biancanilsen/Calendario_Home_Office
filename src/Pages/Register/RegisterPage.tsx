import { Box, Grid, Typography } from "@mui/material";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../assets/Usuario.svg";
import Toast from "../../components/Toast/Toast";
import { colors } from "../../config/theme/colors";
import { useRegister } from "./useRegister";

type ToastType = "success" | "error";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [squad, setSquad] = useState("");

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("success");
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const showToastSuccess = (message: string) => {
    setToastMessage(message);
    setToastType("success");
    setShowToast(true);

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const showToastError = (message: string) => {
    setToastMessage(message);
    setToastType("error");
    setShowToast(true);
  };

  const { handleRegister, usernameError, emailError, passwordError, empresaError } = useRegister(showToastSuccess, showToastError);

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
          <Typography variant="h4" fontWeight="540" sx={{ marginBottom: "10px", textAlign: "center", color: colors.black }}>
            Boas vindas ao InOut!
          </Typography>

          <Typography variant="subtitle1" sx={{ marginBottom: "30px", textAlign: "center", color: colors.grey }}>
            Crie sua conta gratuitamente.
          </Typography>

          <Box sx={{ marginBottom: "30px", position: "relative" }}>
            <Input label="Nome" placeholder="Digite seu nome" fullWidth onChange={(e) => setUsername(e.target.value)} value={username} required />
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
              {usernameError}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "30px", position: "relative" }}>
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

          <Box sx={{ marginBottom: "30px", position: "relative" }}>
            <Input label="Senha" type="password" placeholder="********" fullWidth onChange={(e) => setPassword(e.target.value)} value={password} required />
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
              {passwordError}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "30px", position: "relative" }}>
            <Input
              label="Empresa"
              placeholder="Informe o nome de sua empresa"
              fullWidth
              onChange={(e) => setEmpresa(e.target.value)}
              value={empresa}
              required
            />
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
              {empresaError}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "30px", position: "relative" }}>
            <Input label="Squad" placeholder="Selecione sua squad" fullWidth onChange={(e) => setSquad(e.target.value)} value={squad} required />
          </Box>

          <Button
            style={{
              backgroundColor: colors.primary,
              color: colors.white,
              borderRadius: "10px",
              padding: "10px 0",
              marginBottom: "15px",
            }}
            fullWidth
            onClick={() => handleRegister(username, email, password, empresa)}
          >
            Criar conta
          </Button>

          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography variant="body2" color={colors.grey}>
              Já possui uma conta?{" "}
              <Link href="/" underline="hover" color="primary">
                Entrar
              </Link>
            </Typography>
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
