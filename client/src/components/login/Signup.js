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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Container = styled(Box)`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap : 1rem;
  grid-area : right;
`;

const SignUpButton = styled(Button)(({ theme })=>({
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  width: 300,
  height: 45,
  ":hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const SignInText = styled(Typography)(({ theme })=>({
  color: theme.palette.secondary.main,
  fontSize: 14,
  " > span": {
    cursor: "pointer",
    textDecorationLine: "underline",
  },
  " > span:hover": {
    color: "#fff",
  },
}));

const PasswordInput = styled(FormControl)(({ theme })=>({
  width: 300,
  "& label.Mui-focused": {
    color: theme.palette.secondary.light,
  },
  "& label": {
    color: theme.palette.secondary.light,
  },
  "& .MuiFilledInput-root": {
    backgroundColor: theme.palette.dark,
    color: "#fff",
  },
  "& .MuiFilledInput-root.Mui-focused ": {
    backgroundColor: theme.palette.dark,
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: theme.palette.dark,
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
}));

const StyledTextField = styled(TextField)(({ theme })=>({
  width: 300,
  "& label, label.Mui-focused": {
    color: theme.palette.secondary.light,
  },
  "& .MuiFilledInput-root": {
    backgroundColor: theme.palette.dark,
    color: "#fff",
  },
  "& .MuiFilledInput-root.Mui-focused ": {
    backgroundColor: theme.palette.dark,
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: theme.palette.dark,
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
}));

function Signup({ toggleLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container>
      <StyledTextField variant="filled" label="Name" />
      <StyledTextField variant="filled" type="username" label="Username" />
      <StyledTextField variant="filled" type="email" label="Email Address" />
      <PasswordInput variant="filled">
        <InputLabel>Password</InputLabel>
        <FilledInput
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? (
                  <VisibilityOff sx={{ color: "secondary.dark" }} />
                ) : (
                  <Visibility sx={{ color: "secondary.dark" }} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </PasswordInput>
      <SignUpButton variant="contained">Sign Up</SignUpButton>
      <SignInText>
        Already have an account? <span onClick={toggleLogin} >Sign In</span>
      </SignInText>
    </Container>
  );
}

export default Signup;
