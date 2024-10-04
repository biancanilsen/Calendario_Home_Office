import { Box, Grid, Typography } from "@mui/material";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../assets/Usuario.svg";
import Google from "../../assets/icons/Google.svg";
import { colors } from "../../config/theme/colors";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/calendar");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
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
        <Box sx={{ width: "80%", maxWidth: 400 }}>
          <Typography variant="h4" fontWeight="540" sx={{ marginBottom: "20px", textAlign: "center" }}>
            Bem-vindo de volta!
          </Typography>

          <Box sx={{ marginBottom: "15px" }}>
            <Input
              label="E-mail corporativo"
              placeholder="Digite seu e-mail"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
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
            onClick={handleLogin}
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
          display: "flex",
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
