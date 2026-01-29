import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Mínimo de 3 caracteres")
      .max(15, "Máximo de 15 caracteres")
      .required("Username obrigatório"),
    password: Yup.string()
      .min(4, "Mínimo de 4 caracteres")
      .max(20, "Máximo de 20 caracteres")
      .required("Senha obrigatória"),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post("/auth", data)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Erro no registro:", err);
        alert("Erro ao registrar usuário");
      });
  };

  return (
    <div className="formContainer">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formBox">
          <label>Username</label>
          <ErrorMessage name="username" component="span" />
          <Field autoComplete="off" name="username" placeholder="Ex. John123" />

          <label>Password</label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            type="password"
            name="password"
            placeholder="Sua senha"
          />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
