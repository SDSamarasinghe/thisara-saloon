import { Modal } from "antd";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Field } from "redux-form";
import * as Yup from "yup";
import Spinner from "../../components/Spinner/Spinner";
// import { email, minLength6, required } from "../../utilities/validation";
import { formatServerMessage } from "../../utils/formatServerMessage";

const AuthForm = ({
  handleSubmit,
  submitting,
  loading,
  isSignup,
  onAuth,
  onClearErrors,
  error,
  isAuthenticated,
}) => {
  const [isError, setIsError] = useState(false);
  //   const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setIsError(true);
    }
  }, [error]);

  const onRedirectHandler = () => {
    isSignup ? navigate("/signin") : navigate("/signup");
  };

  const onSubmit = (formValues) => {
    onAuth(formValues.email, formValues.password, isSignup);
  };

  const OkHandle = () => {
    onClearErrors();
    setIsError(false);
  };

  const CancelHandle = () => {
    onClearErrors();
    setIsError(false);
  };

  const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className="form__field">
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched && error && <div className="error">{error}</div>}
        </div>
      </div>
    );
  };

  const renderError = () => {
    return (
      <Modal title="" visible={true} onOk={OkHandle} onCancel={CancelHandle}>
        <p>{formatServerMessage(error.message)}</p>
      </Modal>
    );
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Must be 6 characters or more")
      .required("Required"),
  });

  const renderForm = () => {
    return loading ? (
      <Spinner />
    ) : (
      <React.Fragment>
        <div className="form__info">
          {isSignup ? "Create your account" : "Sign in to your account"}
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // handle submit logic here
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />

              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form__button"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="form__info">
          {isSignup ? "Already have an account?" : "Don't have an account yet?"}
          <span className="form__link" onClick={onRedirectHandler}>
            {" "}
            {isSignup ? "Sign in." : "Sign up."}
          </span>
        </div>
      </React.Fragment>
    );
  };

  let authRedirect = null;
  if (isAuthenticated) {
    authRedirect = <Navigate to="/" />;
  }

  return (
    <div className="container--form">
      {authRedirect}
      {isError && renderError()}
      {renderForm()}
    </div>
  );
};

export default AuthForm;
