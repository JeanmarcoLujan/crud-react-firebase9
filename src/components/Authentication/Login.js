import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { auth } from "../../firebaseConfig/firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      handleClose();
    } catch (error) {
      return;
    }
  };

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: "#EEBC1D" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
