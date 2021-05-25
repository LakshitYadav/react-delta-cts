import React from 'react'
import useInput from '../hooks/use-input';
import './RegistrationPage.css'

const RegistrationPage = () => {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => {
        var regex = /^[a-zA-Z ]+$/;
        return regex.test(value);
    });

    const {
        value: enteredUsername,
        isValid: enteredUsernameIsValid,
        hasError: usernameInputHasError,
        valueChangeHandler: usernameChangedHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsernameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => {
        var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return regex.test(value);
    });

    const {
        value: enteredContact,
        isValid: enteredContactIsValid,
        hasError: contactInputHasError,
        valueChangeHandler: contactChangedHandler,
        inputBlurHandler: contactBlurHandler,
        reset: resetContactInput
    } = useInput(value => {
        var regex = /^[6-9][0-9]{9}$/;
        return regex.test(value);
    });

    const {
        value: enteredDOB,
        isValid: enteredDOBIsValid,
        hasError: DOBInputHasError,
        valueChangeHandler: DOBChangedHandler,
        inputBlurHandler: DOBBlurHandler,
        reset: resetDOBInput
    } = useInput(value => value.trim() !== '');
    //     {
    //     const [day, month, year] = value.split('-');

    //     let today = new Date();
    //     let age = today.getFullYear() - +year;

    //     if (today.getMonth() < +month || (today.getMonth() === +month && today.getDate() < +day)) {
    //         age--;
    //     }

    //     return (age > 18 && age < 96) ? true : false;
    // });

    const {
        value: enteredAddress,
        isValid: enteredAddressIsValid,
        hasError: addressInputHasError,
        valueChangeHandler: addressChangedHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddressInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredState,
        isValid: enteredStateIsValid,
        hasError: stateInputHasError,
        valueChangeHandler: stateChangedHandler,
        inputBlurHandler: stateBlurHandler,
        reset: resetStateInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredCountry,
        isValid: enteredCountryIsValid,
        hasError: countryInputHasError,
        valueChangeHandler: countryChangedHandler,
        inputBlurHandler: countryBlurHandler,
        reset: resetCountryInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredCitizenship,
        isValid: enteredCitizenshipIsValid,
        hasError: citizenshipInputHasError,
        valueChangeHandler: citizenshipChangedHandler,
        inputBlurHandler: citizenshipBlurHandler,
        reset: resetCitizenshipInput
    } = useInput(value => value.trim() !== '');

    const {
        isValid: enteredGenderIsValid,
        hasError: genderInputHasError,
        valueChangeHandler: genderChangedHandler,
        inputBlurHandler: genderBlurHandler,
        reset: resetGenderInput
    } = useInput(value => value.trim() !== '');

    const {
        isValid: enteredMaritalStatusIsValid,
        hasError: maritalStatusInputHasError,
        valueChangeHandler: maritalStatusChangedHandler,
        inputBlurHandler: maritalStatusBlurHandler,
        reset: resetMaritalStatusInput
    } = useInput(value => value.trim() !== '');

    const {
        isValid: enteredAccountTypeIsValid,
        hasError: accountTypeInputHasError,
        valueChangeHandler: accountTypeChangedHandler,
        inputBlurHandler: accountTypeBlurHandler,
        reset: resetAccountTypeInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredBankName,
        isValid: enteredBankNameIsValid,
        hasError: bankNameInputHasError,
        valueChangeHandler: bankNameChangedHandler,
        inputBlurHandler: bankNameBlurHandler,
        reset: resetBankNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredBranchName,
        isValid: enteredBranchNameIsValid,
        hasError: branchNameInputHasError,
        valueChangeHandler: branchNameChangedHandler,
        inputBlurHandler: branchNameBlurHandler,
        reset: resetBranchNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredInitialDepositAmount,
        isValid: enteredInitialDepositAmountIsValid,
        hasError: initialDepositAmountInputHasError,
        valueChangeHandler: initialDepositAmountChangedHandler,
        inputBlurHandler: initialDepositAmountBlurHandler,
        reset: resetInitialDepositAmountInput
    } = useInput(value => value.trim() !== '');

    const {
        isValid: enteredIdentificationTypeIsValid,
        hasError: identificationTypeInputHasError,
        valueChangeHandler: identificationTypeChangedHandler,
        inputBlurHandler: identificationTypeBlurHandler,
        reset: resetIdentificationTypeInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredIdentificationNumber,
        isValid: enteredIdentificationNumberIsValid,
        hasError: identificationNumberInputHasError,
        valueChangeHandler: identificationNumberChangedHandler,
        inputBlurHandler: identificationNumberBlurHandler,
        reset: resetIdentificationNumberInput
    } = useInput(value => {
        var regex = /^[A-Z0-9]{12}$/;
        return regex.test(value);
    });

    const {
        value: enteredNomineeName,
        isValid: enteredNomineeNameIsValid,
        hasError: nomineeNameInputHasError,
        valueChangeHandler: nomineeNameChangedHandler,
        inputBlurHandler: nomineeNameBlurHandler,
        reset: resetNomineeNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredNomineeAccountNumber,
        isValid: enteredNomineeAccountNumberIsValid,
        hasError: nomineeAccountNumberInputHasError,
        valueChangeHandler: nomineeAccountNumberChangedHandler,
        inputBlurHandler: nomineeAccountNumberBlurHandler,
        reset: resetNomineeAccountNumberInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredNomineeAddress,
        isValid: enteredNomineeAddressIsValid,
        hasError: nomineeAddressInputHasError,
        valueChangeHandler: nomineeAddressChangedHandler,
        inputBlurHandler: nomineeAddressBlurHandler,
        reset: resetNomineeAddressInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredGuardianName,
        isValid: enteredGuardianNameIsValid,
        hasError: guardianNameInputHasError,
        valueChangeHandler: guardianNameChangedHandler,
        inputBlurHandler: guardianNameBlurHandler,
        reset: resetGuardianNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredGuardianType,
        isValid: enteredGuardianTypeIsValid,
        hasError: guardianTypeInputHasError,
        valueChangeHandler: guardianTypeChangedHandler,
        inputBlurHandler: guardianTypeBlurHandler,
        reset: resetGuardianTypeInput
    } = useInput(value => value.trim() !== '');

    console.log(enteredDOB);

    const handleRegistrationOnSubmit = () => {
        console.log('In Submit Handler')

        if (!enteredNameIsValid || !enteredUsernameIsValid || !enteredPasswordIsValid || !enteredEmailIsValid || !enteredContactIsValid || !enteredDOBIsValid || !enteredAddressIsValid || !enteredStateIsValid || !enteredCountryIsValid || !enteredCitizenshipIsValid || !enteredGenderIsValid || !enteredMaritalStatusIsValid || !enteredAccountTypeIsValid || !enteredBankNameIsValid || !enteredBranchNameIsValid || !enteredInitialDepositAmountIsValid || !enteredIdentificationTypeIsValid || !enteredIdentificationNumberIsValid || !enteredNomineeNameIsValid || !enteredNomineeAccountNumberIsValid || !enteredNomineeAddressIsValid || !enteredGuardianNameIsValid || !enteredGuardianTypeIsValid) {
            return;
        }

        resetNameInput();
        resetUsernameInput();
        resetPasswordInput();
        resetEmailInput();
        resetContactInput();
        resetDOBInput();
        resetAddressInput();
        resetStateInput();
        resetCountryInput();
        resetCitizenshipInput();
        resetGenderInput();
        resetMaritalStatusInput();
        resetAccountTypeInput();
        resetBankNameInput();
        resetBranchNameInput();
        resetInitialDepositAmountInput();
        resetIdentificationTypeInput();
        resetIdentificationNumberInput();
        resetNomineeNameInput();
        resetNomineeAccountNumberInput();
        resetGuardianNameInput();
        resetGuardianTypeInput();
        resetNomineeAddressInput();
    }

    return (

        <div className="div-form">

            <h1>Account Registration Page</h1>
            <form className="border border-dark rounded registration-form" onSubmit={handleRegistrationOnSubmit}>

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="dateOfRegistration" className="dateOfRegistration">Account Registration Date : </label>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="dateValue">{new Date().toLocaleString().split(',')[0] + ''}</label>
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationFullName">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationFullName"
                            placeholder="Full Name"
                            onChange={nameChangedHandler}
                            onBlur={nameBlurHandler}
                            value={enteredName}
                            required
                        />
                        {nameInputHasError && (<p className="error-text">Special Characters not allowed</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationUsername">Username</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Username"
                                onChange={usernameChangedHandler}
                                onBlur={usernameBlurHandler}
                                value={enteredUsername}
                                required
                            />
                        </div>
                        {usernameInputHasError && (<p className="error-text">Username cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationPassword">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="registrationPassword"
                            placeholder="Password"
                            onChange={passwordChangedHandler}
                            onBlur={passwordBlurHandler}
                            value={enteredPassword}
                            required
                        />
                        {passwordInputHasError && (<p className="error-text">Password cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationEmail">Email</label>
                        <input type="email"
                            className="form-control"
                            id="registrationEmail"
                            placeholder="abc@xyz.com"
                            onChange={emailChangedHandler}
                            onBlur={emailBlurHandler}
                            value={enteredEmail}
                            required
                        />
                        {emailInputHasError && (<p className="error-text">Please enter a valid email address</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationContactNumber">Contact Number</label>
                        <input
                            type="number"
                            className="form-control"
                            id="registrationContactNumber"
                            placeholder="10-digit number"
                            onChange={contactChangedHandler}
                            onBlur={contactBlurHandler}
                            value={enteredContact}
                            required
                        />
                        {contactInputHasError && (<p className="error-text">Please enter a valid 10-digit number</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationDateOfBirth">Date of Birth</label>
                        <input type="date"
                            className="form-control"
                            id="registrationDateOfBirth"
                            placeholder="Country"
                            onChange={DOBChangedHandler}
                            onBlur={DOBBlurHandler}
                            value={enteredDOB}
                            required
                        />
                        {DOBInputHasError && (<p className="error-text">Date of Birth cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md mb-3">
                        <label htmlFor="registrationAddress">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationAddress"
                            placeholder="Address"
                            onChange={addressChangedHandler}
                            onBlur={addressBlurHandler}
                            value={enteredAddress}
                            required
                        />
                        {addressInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationState">State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationState"
                            placeholder="State"
                            onChange={stateChangedHandler}
                            onBlur={stateBlurHandler}
                            value={enteredState}
                            required
                        />
                        {stateInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationCountry">Country</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationCountry"
                            placeholder="Country"
                            onChange={countryChangedHandler}
                            onBlur={countryBlurHandler}
                            value={enteredCountry}
                            required
                        />
                        {countryInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationCitizenship">Citizenship</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationCitizenship"
                            placeholder="Citizenship"
                            onChange={citizenshipChangedHandler}
                            onBlur={citizenshipBlurHandler}
                            value={enteredCitizenship}
                            required
                        />
                        {citizenshipInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <div className="gender-radio-btn">
                            <label htmlFor="registrationGender">Gender</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio" name="registrationGender"
                                    id="registrationGenderMale"
                                    value="Male"
                                    onChange={genderChangedHandler}
                                    onBlur={genderBlurHandler}
                                    required
                                />
                                <label className="form-check-label" htmlFor="registrationGenderMale">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="registrationGender"
                                    id="registrationGenderFemale"
                                    value="Female"
                                    onChange={genderChangedHandler}
                                    onBlur={genderBlurHandler}
                                    required />
                                <label className="form-check-label" htmlFor="registrationGenderFemale">Female</label>
                            </div>
                        </div>
                        {genderInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="marital-radio-btn">
                            <label htmlFor="registrationMaritalStatus">Marital Status</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="registrationMaritalStatus"
                                    id="registrationMaritalStatusSingle"
                                    value="Single"
                                    onChange={maritalStatusChangedHandler}
                                    onBlur={maritalStatusBlurHandler}
                                    required
                                />
                                <label className="form-check-label" htmlFor="registrationMaritalStatusSingle">Single</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="registrationMaritalStatus"
                                    id="registrationMaritalStatusMarried"
                                    value="Married"
                                    onChange={maritalStatusChangedHandler}
                                    onBlur={maritalStatusBlurHandler}
                                    required
                                />
                                <label className="form-check-label" htmlFor="registrationMaritalStatusMarried">Married</label>
                            </div>
                        </div>
                        {maritalStatusInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationAccountType">Account Type</label>
                        <select
                            className="custom-select"
                            id="registrationAccountType"
                            onChange={accountTypeChangedHandler}
                            onBlur={accountTypeBlurHandler}
                            required
                        >
                            <option value=''>------ Select ------</option>
                            <option value="Salary">Salary</option>
                            <option value="Savings">Savings</option>
                        </select>
                        {accountTypeInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-6 mb-3">
                        <label htmlFor="registrationBankName">Bank Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationBankName"
                            placeholder="Bank Name"
                            onChange={bankNameChangedHandler}
                            onBlur={bankNameBlurHandler}
                            value={enteredBankName}
                            required
                        />
                        {bankNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="registrationBranchName">Branch Name</label>
                        <input
                            type="number"
                            className="form-control"
                            id="registrationBranchName"
                            placeholder="Branch Name"
                            onChange={branchNameChangedHandler}
                            onBlur={branchNameBlurHandler}
                            value={enteredBranchName}
                            required
                        />
                        {branchNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationInitialDepositAmount">Initial Deposit Amount</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend1"><strong>₹</strong></span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="registrationInitialDepositAmount"
                                placeholder="Amount (in Rupees)"
                                aria-describedby="inputGroupPrepend1"
                                onChange={initialDepositAmountChangedHandler}
                                onBlur={initialDepositAmountBlurHandler}
                                value={enteredInitialDepositAmount}
                                min='1'
                                required
                            />
                        </div>
                        {initialDepositAmountInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationIdentificationType">Identification Type</label>
                        <select
                            className="custom-select"
                            id="registrationIdentificationType"
                            onChange={identificationTypeChangedHandler}
                            onBlur={identificationTypeBlurHandler}
                        >
                            <option value="">------ Select ------</option>
                            <option value="PAN">PAN</option>
                            {/* <option value="Aadhar">Aadhar</option>
                            <option value="Passport">Passport</option>
                            <option value="Driving License">Driving License</option>
                            <option value="Voter ID">Voter ID</option> */}
                        </select>
                        {identificationTypeInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="registrationIdentificationNumber">Identification Document No</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationIdentificationNumber"
                            placeholder="Identification No"
                            onChange={identificationNumberChangedHandler}
                            onBlur={identificationNumberBlurHandler}
                            value={enteredIdentificationNumber}
                            required
                        />
                        {identificationNumberInputHasError && (<p className="error-text">Please enter a valid value</p>)}
                    </div>

                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="registrationNomineeName">Nominee Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationNomineeName"
                            placeholder="Nominee Name"
                            onChange={nomineeNameChangedHandler}
                            onBlur={nomineeNameBlurHandler}
                            value={enteredNomineeName}
                            required
                        />
                        {nomineeNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="registrationNomineeAccountNumber">Nominee Account Number</label>
                        <input
                            type="number"
                            className="form-control"
                            id="registrationNomineeAccountNumber"
                            placeholder="Nominee Account No"
                            onChange={nomineeAccountNumberChangedHandler}
                            onBlur={nomineeAccountNumberBlurHandler}
                            value={enteredNomineeAccountNumber}
                            required
                        />
                        {nomineeAccountNumberInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md mb-3">
                        <label htmlFor="registrationNomineeAddress">Nominee Full Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationNomineeAddress"
                            placeholder="Nominee Address"
                            onChange={nomineeAddressChangedHandler}
                            onBlur={nomineeAddressBlurHandler}
                            value={enteredNomineeAddress}
                            required
                        />
                        {nomineeAddressInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="registrationGuardianName">Guardian Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="registrationGuardianName"
                            placeholder="Guardian Full Name"
                            onChange={guardianNameChangedHandler}
                            onBlur={guardianNameBlurHandler}
                            value={enteredGuardianName}
                            required
                        />
                        {guardianNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="registrationGuardianType">Guardian Type/ Relationship</label>
                        <input
                            type="number"
                            className="form-control"
                            id="registrationGuardianType"
                            placeholder="Guardian Type/ Relationship"
                            onChange={guardianTypeChangedHandler}
                            onBlur={guardianTypeBlurHandler}
                            value={enteredGuardianType}
                            required
                        />
                        {guardianTypeInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />
                <br />

                <div className="d-flex justify-content-center">
                    <button className="btn btn-lg btn-outline-dark btn-block font-weight-bold" type="submit">REGISTER</button>
                </div>

            </form>

        </div>
    )
}

export default RegistrationPage
