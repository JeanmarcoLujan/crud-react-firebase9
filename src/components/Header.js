import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import AuthModal from "./Authentication/AuthModal";
import UserSiderbar from "./Authentication/UserSiderbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig/firebase";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer"
  }
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    type: "dark"
  }
});

function Header() {
  const classes = useStyles();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);



  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            Just Sport
            {user != null ? <UserSiderbar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
