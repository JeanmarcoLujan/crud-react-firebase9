import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar, Button } from "@material-ui/core";

import { signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig/firebase";

import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const useStyles = makeStyles({
  container: {
    padding: 5,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "monospace"
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "92%"
  },
  logout: {
    width: 105,
    height: 40,
    marginLeft: 15,
    backgroundColor: "#EEBC1D",
    display: "flex",
    flexDirection: "column",
    alignItems: "right"
  },
  picture: {
    width: 200,
    height: 200,
    cursor: "pointer",
    backgroundColor: "#EEBC1D",
    objectFit: "contain"
  },
  watchlist: {
    flex: 1,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 15,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    overflowY: "scroll"
  },
  coin: {
    padding: 10,
    borderRadius: 5,
    color: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EEBC1D",
    boxShadow: "0 0 3px black"
  }
});

const UserSidebar = () => {
  //xport default function UserSidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = () => {
    signOut(auth);

    toggleDrawer();
  };
  console.log(user);

  return (
    <div>
      <div className={classes.container}>
        <Button variant="contained" className={classes.logout} onClick={logOut}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default UserSidebar;
