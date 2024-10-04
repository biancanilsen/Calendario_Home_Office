import { Box, Button, Grid, Typography } from "@mui/material";
import { Input, Link } from "@nextui-org/react";
import { useState } from "react";
import Usuario from "../../assets/Usuario.svg";
import { cadastrarUsuario } from "../../services/UsuarioService";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [squad, setSquad] = useState("");

  const handleRegister = () => {
    cadastrarUsuario(username, email, password);
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
          <Typography variant="h4" fontWeight="540" sx={{ marginBottom: "10px", textAlign: "center", color: "#101828" }}>
            Boas vindas ao InOut!
          </Typography>

          <Typography variant="subtitle1" sx={{ marginBottom: "30px", textAlign: "center", color: "#475467" }}>
            Crie sua conta gratuitamente.
          </Typography>

          <Box sx={{ marginBottom: "30px" }}>
            <Input label="Nome" placeholder="Digite seu nome" fullWidth onChange={(e) => setUsername(e.target.value)} value={username} required />
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <Input label="E-mail corporativo" placeholder="Digite sua e-mail" fullWidth onChange={(e) => setEmail(e.target.value)} value={email} required />
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <Input label="Senha" type="password" placeholder="********" fullWidth onChange={(e) => setPassword(e.target.value)} value={password} required />
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <Input
              label="Empresa"
              placeholder="Informe o nome de sua empresa"
              fullWidth
              onChange={(e) => setEmpresa(e.target.value)}
              value={empresa}
              required
            />
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <Input label="Squad" placeholder="Selecione sua squad" fullWidth onChange={(e) => setSquad(e.target.value)} value={squad} required />
          </Box>

          <Button
            style={{
              backgroundColor: "#1a1a2e",
              color: "#fff",
              borderRadius: "20px",
              padding: "10px 0",
              marginBottom: "15px",
            }}
            fullWidth
            onClick={handleRegister}
          >
            Criar conta
          </Button>

          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography variant="body2" color={"#475467"}>
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
