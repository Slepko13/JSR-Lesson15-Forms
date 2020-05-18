import React from 'react';
import './SimpleModal.scss';

const SimpleModal = (props) => {
    const { email, emailReq, password, passwordReq, checkbox, checkboxReq } = { ...props.simpleModal };
    return (
        <div className="SimpleModal">
            <form className="form"
                action="#"
                // method="post"
                onSubmit={props.closeSimpleModal}
            >
                <div className="form__title">Sing in to your account</div>
                <input
                    className={emailReq ? "form__email req__border" : "form__email"}
                    name="email"
                    type="email"
                    placeholder={emailReq ? "email required" : "yourmail@gmail.com"}

                    value={email}
                    onChange={props.handleChange}
                    onBlur={props.isRequired}

                />

                <input
                    className={passwordReq ? "form__password req__border" : "form__password"}
                    name="password"
                    type="password"
                    placeholder={passwordReq ? "password required" : "******"}
                    minLength="6"
                    value={password}
                    onChange={props.handleChange}
                    onBlur={props.isRequired}



                />
                <div className="checkbox__wrap">
                    <input
                        className="form__checkbox req__border"
                        id="checkboxSimple"
                        name="checkbox"
                        type="checkbox"
                        onChange={props.handleChange}
                        checked={checkbox}
                    />
                    <label htmlFor="checkboxSimple" className="label ">
                        {(checkboxReq && !checkbox) ?
                            <span style={{ color: "red" }}>Checkbox required</span> :
                            `Keep me signed in`}
                    </label>
                </div>
                <input
                    className="form__button"
                    type="submit"
                    value="sign in"
                // onClick={props.closeSimpleModal}
                />
                <div className="form__forgot">
                    <a className="form__link" href="http://www.google.com" target="blank">Forgot your password?</a>
                </div>
            </form>
        </div>
    );
}

export default SimpleModal;