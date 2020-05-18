import React from 'react';
import './FormikModal.scss';
import { Formik, Field, Form, ErrorMessage } from "formik";
import YupSchema from './YupSchema';

const FormikModal = (props) => {
    const { email, emailReq, password, passwordReq, checkbox, checkboxReq } = { ...props.formikModal };

    return (
        <div className="FormikModal">
            <Formik
                initialValues={{
                    email: email,
                    password: password,
                    checkbox: checkbox
                }}
                validationSchema={YupSchema}

                handleChange={props.handleChange}

                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        props.closeFormikModal(values);
                        resetForm();
                        // console.log(values);
                        // setSubmitting(false);
                    }, 400);
                }}
            >

                {/* {({ errors, touched }) => ( */}

                <Form className="form"

                >

                    <div className="form__title">Sing in to your account</div>
                    <Field
                        className="form__email"
                        name="email"

                        placeholder="yourmail@gmail.com"
                    // value={email.value}
                    // onChange={props.handleChange}
                    // onBlur={props.isRequired}

                    />

                    <div className="error__message">
                        <ErrorMessage className="error__message" name="email" />
                    </div>

                    <Field
                        className="form__password"
                        name="password"
                        type="password"
                        placeholder="******"

                    // value={password}
                    // onChange={props.handleChange}
                    // onBlur={props.isRequired}
                    />
                    <div className="error__message">
                        <ErrorMessage name="password" />
                    </div>

                    <div className="checkbox__wrap">
                        <Field
                            className="form__checkbox "
                            id="checkboxFormik"
                            name="checkbox"
                            type="checkbox"
                        // onChange={props.handleChange}
                        // checked={checkbox}
                        />
                        <label htmlFor="checkboxFormik" className="label ">
                            {(checkboxReq && !checkbox) ?
                                <span style={{ color: "red" }}>Checkbox required</span> :
                                `Keep me signed in`}
                        </label>
                    </div>
                    <div className="error__message">
                        <ErrorMessage name="checkbox" />
                    </div>
                    {/* {console.log(errors)} */}
                    <input
                        className="form__button"
                        type="submit"
                        value="sign in"
                    />
                    <div className="form__forgot">
                        <a className="form__link" href="http://www.google.com" target="blank">Forgot your password?</a>
                    </div>
                </Form>
                {/* )} */}
            </Formik>
        </div >
    );
}

export default FormikModal;