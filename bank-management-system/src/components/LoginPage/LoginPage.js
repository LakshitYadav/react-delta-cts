
import './LoginPage.css'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../hooks/use-input'



const LoginPage = (props) => {
    let history = useHistory();

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => {
        var regex = /^R-\d\d\d$/;
        return regex.test(value);
    });

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInput(value => value.trim() !== '');

    const handleLoginOnSubmit = (event) => {
        event.preventDefault();
        if (!enteredNameIsValid || !enteredPasswordIsValid) {
            return;
        }
        
        if(enteredName === props.user.customerID && enteredPassword === props.user.password){
            history.push('/user');
        }
        else{
            alert('Invalid Credentials');
        }
        resetNameInput();
        resetPasswordInput();
    }



    return (
        <div className="login-form text-center">
            <form className="border border-dark rounded form-signin" onSubmit={handleLoginOnSubmit}>
                <img className="border rounded-circle mb-4" src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" alt="" width="100" height="100" />

                <label htmlFor="loginCustomerID" className="sr-only">Customer ID</label>
                <div className="mb-4">
                    <input
                        type="text"
                        id="loginCustomerID"
                        className="form-control"
                        placeholder="Customer ID"
                        onChange={nameChangedHandler}
                        onBlur={nameBlurHandler}
                        value={enteredName}
                        required
                    />
                    {nameInputHasError && (<p className="error-text">Please match the ID format (R-XXX) </p>)}
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        id="loginPassword"
                        className="form-control"
                        placeholder="Password"
                        onChange={passwordChangedHandler}
                        onBlur={passwordBlurHandler}
                        value={enteredPassword}
                        required
                    />
                    {passwordInputHasError && (<p className="error-text">Please enter the valid password</p>)}
                </div>
                <label htmlFor="loginPassword" className="sr-only">Password</label>

                <div className="mb-3 text-center">
                    <Link to="/register" > New User? Register Now </Link>
                </div>

                <button className="btn btn-lg btn-outline-dark btn-block font-weight-bold" type="submit">
                    SIGN IN
                </button>
            </form>
        </div>
    )
}

export default LoginPage
