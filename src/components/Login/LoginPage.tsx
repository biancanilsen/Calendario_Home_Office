import { Box, Grid, Typography } from "@mui/material";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import Usuario from "../../assets/Usuario.svg";
import Google from "../../assets/icons/Google.svg";
import { colors } from "../../config/theme/colors";
import Toast from "../Toast/Toast";
import { useGoogleAuth } from "./useGoogleAuth";
import { useLoginPage } from "./useLoginPage";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToastError = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const { handleLogin, emailError, passwordError } = useLoginPage(showToastError);

  const { loginWithGoogle } = useGoogleAuth({ showToastError });

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Toast message={toastMessage} type="error" show={showToast} onClose={() => setShowToast(false)} />

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
          <Typography variant="h4" fontWeight="540" sx={{ marginBottom: "20px", textAlign: "center" }}>
            Bem-vindo de volta!
          </Typography>

          <Box sx={{ marginBottom: "30px", position: "relative" }}>
            <Input
              label="E-mail corporativo"
              placeholder="Digite seu e-mail"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              value={username}
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
              {emailError}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "30px", position: "relative" }}>
            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
              {passwordError}
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right", width: "100%", marginBottom: "15px" }}>
            <Link href="#" underline="hover" color="secondary">
              Esqueceu sua senha?
            </Link>
          </Box>

          <Button
            style={{
              backgroundColor: colors.primary,
              color: colors.white,
              borderRadius: "20px",
              padding: "10px 0",
              marginBottom: "15px",
            }}
            onClick={() => handleLogin(username, password)}
            fullWidth
          >
            Entrar
          </Button>

          <Button
            style={{
              backgroundColor: colors.white,
              color: colors.black,
              borderRadius: "20px",
              padding: "10px 0",
              border: "1px solid",
              borderColor: colors.greyC200,
              marginBottom: "40px",
            }}
            fullWidth
            onClick={() => loginWithGoogle()}
          >
            <img src={Google} alt="Google Icon" style={{ marginRight: "5px" }} />
            Entrar com Google
          </Button>

          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography variant="body2">
              Não possui uma conta?{" "}
              <Link href="/register" underline="hover" color="primary">
                Criar conta
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
