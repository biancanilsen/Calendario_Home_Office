import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Ícone de sucesso
import ErrorIcon from "@mui/icons-material/Error"; // Ícone de erro
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { colors } from "../../config/theme/colors";

interface ToastProps {
  message: string;
  type: "success" | "error";
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const toastStyles = {
    success: {
      backgroundColor: colors.bgPrimary,
      borderColor: "#34D399",
      iconColor: "#10B981",
    },
    error: {
      backgroundColor: colors.bgPrimary,
      borderColor: colors.error,
      iconColor: colors.error,
    },
  };

  const styles = toastStyles[type];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "20px",
        right: "20px",
        display: "flex",
        alignItems: "center",
        backgroundColor: styles.backgroundColor,
        border: `1px solid ${styles.borderColor}`,
        borderRadius: "8px",
        padding: "10px 20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        maxWidth: "300px",
        gap: "10px",
      }}
    >
      {/* Ícone correspondente ao tipo */}
      {type === "success" ? (
        <CheckCircleIcon sx={{ color: styles.iconColor, fontSize: "30px" }} />
      ) : (
        <ErrorIcon sx={{ color: styles.iconColor, fontSize: "30px" }} />
      )}

      {/* Conteúdo do Toast */}
      <Box>
        {/* <Typography variant="subtitle1" fontWeight="bold" sx={{ color: styles.iconColor }}>
          {type === "success" ? "Success!" : "Error"}
        </Typography> */}
        <Typography variant="body2" sx={{ color: "#4B5563" }}>
          {message}
        </Typography>
      </Box>
    </Box>
  );
}
