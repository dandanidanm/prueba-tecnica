import {
    firebase,
    googleAuthProvider,
    facebookAuthProvider
  } from "../firebase/firebase-config";
  import { types } from "../types/type";
  import Swal from "sweetalert2";
  
  export const startGoogleLogin = () => {
    return (dispatch) => {
      firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(({ user }) => {
          console.log(user.photoURL)
          dispatch(login(user.uid, user.displayName, user.photoURL));
        });
    };
  };
  
  export const startFacebookLogin = () => {
    return (dispatch) => {
      firebase
        .auth()
        .signInWithPopup(facebookAuthProvider)
        .then(({ user }) => {
          dispatch(login(user.uid, user.displayName));
        });
    };
  };
  
  export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
       firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch(error => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
                footer: "",
              });
            })
    }
  }
  
  export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password, name)
        .then( async ({ user }) => {
          await user.updateProfile({ displayName: name });
  
          dispatch(login(user.uid, user.displayName));
          Swal.fire({
            position: "top-end",
            text: "Usuario Creado",
            icon: "success",
            title: user.displayName,
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
            footer: "",
            timer: 2500,
          });
        });
    };
  };
  
  export const login = (uid, displayName,photoURL) => ({
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  });
  
  export const startLogout = () => {
    return async (dispatch) => {
      await firebase.auth().signOut();
      dispatch(logout());
    };
  };
  
  export const logout = () => ({
    type: types.logout,
  });
  