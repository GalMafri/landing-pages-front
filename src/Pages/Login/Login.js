import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../Components/inputs/Input";
import validator from "validator";
import FetchData from "../../functions/FetchData";
import SetLocalStorage from "../../functions/SetLocalStorage";
import { setUserDataHandler } from "../../Store/UserData";
import Loader from "./../../Components/loader/Loader";

import "./Login.scss";

const Login = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [seccuss, setSeccuss] = useState(false);
  const [fields, setFields] = useState({
    status: 1,
    login: {
      email: "",
      password: "",
    },
    register: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const changeStatus = (value) => {
    setFields((prev) => {
      return {
        status: value,
        login: {
          email: "",
          password: "",
        },
        register: {
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      };
    });
    setErrors(false);
    setSeccuss(false);
  };

  const updateFields = (event) => {
    if (fields.status === 1) {
      setFields((prev) => {
        prev.login[event.target.name] = event.target.value;
        return { ...prev };
      });
    } else {
      setFields((prev) => {
        prev.register[event.target.name] = event.target.value;
        return { ...prev };
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let errorMsg = [];
    if (fields.status === 1) {
      if (!validator.isEmail(fields.login.email)) errorMsg.push("Email is invalid");
      if (!validator.isLength(fields.login.password, { min: 5 }))
        errorMsg.push("Password is invalid");
    } else {
      if (!validator.isLength(fields.register.fullName, { min: 5 }))
        errorMsg.push("Full Name is invalid");
      if (!validator.isEmail(fields.register.email)) errorMsg.push("Email is invalid");
      if (!validator.isLength(fields.register.password, { min: 5 }))
        errorMsg.push("Password is invalid");
      if (!validator.isLength(fields.register.confirmPassword, { min: 5 }))
        errorMsg.push("Confirm Password is invalid");

      if (fields.register.password !== fields.register.confirmPassword)
        errorMsg.push("Passwords not match");
    }

    if (errorMsg.length > 0) {
      setLoading(false);
      return;
    }

    if (fields.status === 1) {
      try {
        const data = await FetchData(process.env.REACT_APP_FETCH_URL + "users/login", {
          method: "POST",
          body: JSON.stringify({ ...fields.login }),
        });
        if (data.error) {
          setLoading(false);
          setErrors(data.error);
          return;
        } else {
          setSeccuss("Login success");
          SetLocalStorage("user", data);
          dispatch(setUserDataHandler({ UserData: data }));
          setLoading(false);
        }
      } catch (err) {
        setErrors([err.error]);
        setLoading(false);
      }
    } else {
      try {
        const data = await FetchData(process.env.REACT_APP_FETCH_URL + "users/register", {
          method: "POST",
          body: JSON.stringify({ ...fields.register }),
        });
        if (data.error) {
          setErrors(data.error);
          setLoading(false);
          return;
        } else {
          changeStatus(1);
          setSeccuss("Register success");
          setLoading(false);
        }
      } catch (err) {
        setErrors([err.error]);
        setLoading(false);
      }
    }
  };

  return (
    <React.Fragment>
      {loading && <Loader />}
      <div className="form_wrapper">
        <form className="form" onSubmit={onSubmit}>
          <h2 className="form_title">{fields.status === 1 ? "Login" : "Register"}</h2>
          {/* Login */}
          {fields.status === 1 && (
            <div className="form_contianer">
              <Input name="email" type="email" labelText="Email" change={updateFields} />
              <Input name="password" type="password" labelText="Password" change={updateFields} />
            </div>
          )}

          {/* Register */}
          {fields.status === 2 && (
            <div className="form_contianer">
              <Input name="fullName" type="text" labelText="Full Name" change={updateFields} />
              <Input name="email" type="email" labelText="Email" change={updateFields} />
              <Input name="password" type="password" labelText="Password" change={updateFields} />
              <Input
                name="confirmPassword"
                type="password"
                labelText="Confirm Password"
                change={updateFields}
              />
            </div>
          )}

          <div className="form_footer">
            <button className="form_submit">{fields.status === 1 ? "Login" : "Register"}</button>
          </div>
          <div className="form_register">
            <button
              className="form_register-btn"
              onClick={() => changeStatus(fields.status === 1 ? 2 : 1)}
            >
              {fields.status === 1 ? "Register" : "Login"}
            </button>
          </div>

          {errors && <span className="form_error">{errors}</span>}
          {seccuss && <span className="form_seccuss">{seccuss}</span>}
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
