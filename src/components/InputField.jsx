import { useState, useEffect } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const InputField = ({
  label, 
  placeholder, 
  type, 
  register, 
  error, 
  value, 
  extraProps,
  color
}) => {
    
  const [showPassword, setShowPassword] = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);

  useEffect(() => {
    setLabelVisible(!value);
  }, [value]);
  
  const textFieldStyles = {
      "& .MuiOutlinedInput-root": {
        borderRadius: "24px",
        backgroundColor: color || "var(--milky-primary)",
        width: "100%",
        //minWidth: "258px",
        "& fieldset": { border: "none" },
        "&.Mui-disabled": {
          opacity: 1
        },
        "&.Mui-disabled input": {
          color: "black", 
          WebkitTextFillColor: "black"
        },
      },
      "& input[type='date']::-webkit-calendar-picker-indicator": {
        filter: "invert(0%)",
        cursor: "pointer"
      },
      "& input[type='date']": {
        colorScheme: "light",
      },
          "& .MuiInputLabel-root": {
        "&.Mui-error": { 
          color: "var(--orange-primary)", 
          WebkitTextFillColor: "var(--orange-primary)"
        }
      },
      "& .MuiFormHelperText-root": {
        color: "var(--orange-primary)",
        ml: 0,
        WebkitTextFillColor: "var(--orange-primary)"
      }
  };

    const inputType = type === "password" && !showPassword ? "password" : "text";

    return (
      <>
        <Typography
          align="left"
          sx={{mb: -2}}
        >
          {label}
        </Typography>
        <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
          <TextField
            {...register}
            fullWidth
            type={type === "password" ? inputType : type}
            label={labelVisible ? placeholder : ""}
            size="small"
            variant="outlined"
            margin="normal"
            onFocus={() => setLabelVisible(false)}
            onBlur={(e) => setLabelVisible(e.target.value === "")}
            onInput={(e) => setLabelVisible(e.target.value === "")}
            sx = { textFieldStyles }
            error={!!error}
            helperText={error?.message || ""}
            slotProps={{
              inputLabel: { shrink: !!value }
            }}
            {...extraProps}
          />
          {type === "password" && (
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              sx={{ position: "absolute", right: 10, top: 16 }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          )}
        </Box>
      </>
    )
}