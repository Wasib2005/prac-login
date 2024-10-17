import { useContext } from "react";
import "./App.css";
import { RegistrationContext } from "./assets/RegistrationProvider";

function App() {
  const {
    user,
    userSingOut,
    SingInOrSingUpWithGoogle,

  } = useContext(RegistrationContext);


  return (
    <>
      <div>
        <p>{user}</p>

        <button onClick={SingInOrSingUpWithGoogle} className="btn">
          GLogin
        </button>
        <button className="btn" onClick={userSingOut}>
          singOut
        </button>
      </div>
    </>
  );
}

export default App;
