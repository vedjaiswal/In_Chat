import React, { useState } from "react";
import {
  TextField,
  styled,
  Box,
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const Container = styled(Box)`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  grid-area: right;
`;

const SignUpButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#be905e",
  width: 300,
  height: 45,
  ":hover": {
    backgroundColor: "#be905e",
  },
});

const SignInText = styled(Typography)({
  color: "#51555a",
  fontSize: 14,
  " > span": {
    cursor: "pointer",
    textDecorationLine: "underline",
  },
  " > span:hover": {
    color: "#fff",
  },
});

const PasswordInput = styled(FormControl)({
  width: 300,
  "& label.Mui-focused": {
    color: "#424242",
  },
  "& label": {
    color: "#424242",
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#111111",
    color: "#fff",
  },
  "& .MuiFilledInput-root.Mui-focused ": {
    backgroundColor: "#111111",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "#111111",
    borderBottomColor: "#fff",
  },
  "& .MuiFilledInput-root:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiTouchRipple-root": {
    color: "#fff",
  },
  // "& .Mui-focused":{
  //   color : "#040404",
  //   borderColor : "#040404",
  //   background : "#fff"
  // },
});

const StyledTextField = styled(TextField)({
  width: 300,
  "& label, label.Mui-focused": {
    color: "#424242",
  },
  // "& label":{
  //   color : "#424242"
  // },
  "& .MuiFilledInput-root": {
    backgroundColor: "#111111",
    color: "#fff",
  },
  "& .MuiFilledInput-root.Mui-focused ": {
    backgroundColor: "#111111",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "#111111",
    borderBottomColor: "#fff",
  },
  "& .MuiFilledInput-root:after": {
    borderBottomColor: "#fff",
  },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "#040404"
  // },
  // "& .MuiInput-underline": {
  //   borderBottomColor: "#474747"
  // },
  // "& .MuiFilledInput-root ": {
  //   "& fieldset": {
  //     borderColor: "#040404"
  //   },
  //   "&:hover fieldset": {
  //     borderColor: "#111111",
  //     // backgroundColor : "#111111",
  //     // color : "f1f1f1",
  //     borderWidth: 8
  //   },
  //   "&.Mui-focused fieldset": {
  //     borderColor: "#111111"
  //   }
  // }
});

function Login({ toggleLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container>
      <StyledTextField variant="filled" label="Username" />
      <PasswordInput variant="filled">
        <InputLabel>Password</InputLabel>
        <FilledInput
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? (
                  <VisibilityOff sx={{ color: grey[800] }} />
                ) : (
                  <Visibility sx={{ color: grey[800] }} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </PasswordInput>
      <FormControlLabel
        control={
          <Checkbox 
          size="small"
          sx={{ color : "secondary.light"}}
          // color="secondary.dark"
          // checked={jason} 
          // onChange={handleChange} 
          name="remember" />
        }
        sx={{ color : "secondary.light", marginLeft:"-70px" }}
        label={<Typography variant="span" style={{ fontSize : "0.5 rem" }}>Remember me for a month</Typography>}
      />
      <SignUpButton variant="contained">Sign In</SignUpButton>
      <SignInText>
        Don't have an account? <span onClick={toggleLogin} >Sign Up</span>
      </SignInText>
    </Container>
  );
}

export default Login;
