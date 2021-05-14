import React, { ReactElement, useEffect } from "react";
import firebase from "firebase/app";
import auth from "../firebase";
// class LoginForm extends React.Component {
function LoginForm(): ReactElement {
  const sendData = () => {
    var phoneNumber = "+66962963545";
    var applicationVerifier = window.recaptchaVerifier;
    console.log("Hi", phoneNumber);
    auth
      .signInWithPhoneNumber(phoneNumber, applicationVerifier)
      .then((response) => {
        console.log("Success");
        alert("Login");
      })
      .catch((error) => {
        console.log("Success");
        alert("Error; SMS not sent");
      });
  };

  useEffect(() => {
    console.log("useEffect");
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        // other options
      }
    );
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({
    //       currentUser: user,
    //     });
    //   }
    // });
  }, []);

  return (
    <section className="section container">
      <div className="columns is-centered">
        <div className="column is-half">
          <form>
            <div className="field">
              <label className="label">Phone</label>
              <div className="control">
                <input className="input" type="email" name="email" />
              </div>
            </div>
            <input id="recaptcha-container" type="button" />
            <div className="field is-grouped">
              <div className="control">
                <button
                  type="button"
                  className="button is-link"
                  onClick={sendData}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
