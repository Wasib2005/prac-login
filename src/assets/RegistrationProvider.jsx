import { signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { auth } from "./fireBase";

export const RegistrationContext = createContext(null);

const RegistrationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const SingInOrSingUpWithGoogle = () => {
    console.log(1);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(user);
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  const userSingOut = () => {
    signOut(auth);
  };

  console.log(user);

  const authDates = {
    user,

    userSingOut,

    SingInOrSingUpWithGoogle,
  };

  return (
    <RegistrationContext.Provider value={authDates}>
      {children}
    </RegistrationContext.Provider>
  );
};

RegistrationProvider.propTypes = {
  children: PropTypes.node,
};

export default RegistrationProvider;
