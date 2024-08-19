// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, TextField, Button } from '@mui/material';

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Lógica de autenticação aqui
//     navigate('/calendar');
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
//       <TextField
//         label="Usuário"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         sx={{ mb: 2, width: '300px' }}
//       />
//       <TextField
//         label="Senha"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         sx={{ mb: 2, width: '300px' }}
//       />
//       <Button variant="contained" color="primary" onClick={handleLogin}>
//         Entrar
//       </Button>
//     </Box>
//   );
// }

import { Box, Grid, Typography } from "@mui/material";
import { Button, Input, Link, Spacer } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../assets/Usuario.svg";
import Google from "../../assets/icons/Google.svg";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticação aqui
    navigate("/calendar");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Metade da tela com o formulário de login */}
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ width: "80%", maxWidth: 400 }}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Bem-vindo de volta!
          </Typography>
          <Spacer y={1} />
          <Input label="E-mail corporativo" placeholder="Digite seu e-mail" fullWidth onChange={(e) => setUsername(e.target.value)} value={username} required />
          <Spacer y={1} />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Spacer y={0.5} />
          <Box sx={{ textAlign: "right" }}>
            <Link href="#" underline="hover" color="secondary">
              Esqueceu sua senha?
            </Link>
          </Box>
          <Spacer y={1} />
          <Button
            style={{
              backgroundColor: "#1a1a2e",
              color: "#fff",
              borderRadius: "20px",
              padding: "10px 0",
              marginBottom: "10px",
            }}
            onClick={handleLogin}
            fullWidth
          >
            Entrar
          </Button>
          <Button
            style={{
              backgroundColor: "#f5f5f5",
              color: "#000",
              borderRadius: "20px",
              padding: "10px 0",
              border: "1px solid #ccc",
            }}
            fullWidth
          >
            <img src={Google} alt="Google Icon" style={{ marginRight: "5px" }} />
            Entrar com Google
          </Button>
          <Spacer y={1} />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2">
              Não possui uma conta?{" "}
              <Link href="#" underline="hover" color="primary">
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
          backgroundColor: "#1570EF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "40px" }}>
          <img src={Usuario} alt="Login illustration" style={{ width: "100%", maxWidth: "500px" }} />
        </Box>
      </Grid>
    </Grid>
  );
}
