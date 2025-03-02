import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.css";
import { auth } from "../../utility/firebase";
import { useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { type } from "../../utility/actiontype";
import { ClipLoader } from "react-spinners";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setloading] = useState({
    signin: false,
    signup: false,
  });
  const navigte = useNavigate();
  // console.log(email, password);
  const authHandler = (e) => {
    e.preventDefault();
    if (e.target.name == "signIn") {
      setloading({ signin: true, signup: false });
      // firebase authentication // signIn
      signInWithEmailAndPassword(auth, email, password) //auth Tell Firebase which project to use
        .then((userInfo) => {
          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
          setloading({ signin: false, signup: false });
          navigte("/");
        })
        .catch((err) => {
          setError(err.message);
          setloading({ signin: false, signup: false });
        });
    } else {
      setloading({ signin: false, signup: true });
      // user wants to signUp
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
          setloading({ signin: false, signup: false });
          navigte("/");
        })
        .catch((err) => {
          setError(err.message);
          setloading({ signin: false, signup: false });
        });
    }
  };
  return (
    <section className={styles.login}>
      {console.log(error)}
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={styles.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>{" "}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </div>

          <button
            className={styles.signin_btn}
            type="submit"
            onClick={authHandler}
            name="signIn"
          >
            {loading?.signin ? (
              <ClipLoader color="#000" size={20} />
            ) : (
              "Sign in"
            )}
          </button>
        </form>
        <p>
          By continuing, you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice
        </p>
        <button
          className={styles.login_register}
          type="submit"
          onClick={authHandler}
          name="signUp"
        >
          {loading?.signup ? (
            <ClipLoader color="#000" size={20} />
          ) : (
            " Create Your Amamzon Account"
          )}
        </button>
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </section>
  );
}
export default Auth;
