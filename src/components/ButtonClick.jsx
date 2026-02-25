import { Button } from "@mui/material";

export const ButtonClick = ({ label, onClick, type, color, colorHover, colorText, disabled = false }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      fullWidth
      variant="contained"
      disabled={disabled}
      sx={{
        backgroundColor: color,
        color: colorText,
        borderRadius: "24px",
        textTransform: "none",
        height: "48px",
        py: 1.5,
        gap: 1,
        fontWeight: "bold",
        ":hover": { backgroundColor: colorHover },
      }}
    >
      {label}
    </Button>
  );
};