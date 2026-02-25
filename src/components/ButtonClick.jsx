import { Button } from "@mui/material"
import "../styles.css"

export const ButtonClick = ({ label, onClick, type, color, colorHover, colorText, icon, disabled = false }) => {
    const buttonStyle = {
        backgroundColor: color,
        color: colorText,
        borderRadius: "24px",
        textTransform: "none",
        minWidth: "154px",
        width: "258px",
        height: "48px",
        py: "12px",
        px: "32px",
        mb: 1,
        mt: 2, 
        gap: "8px",
        ":hover": { backgroundColor: colorHover }
    }

    return (
        <>
            <Button
                type = {type}
                onClick = {onClick}
                fullWidth
                variant="contained"
                sx={ buttonStyle }
                disabled={disabled}
            >
                <span
                    style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    lineHeight: "1",
                    fontWeight: "bold"
                    }}
                >
                    <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
                    {label}
                </span>
            </Button>
        </>
    )
}