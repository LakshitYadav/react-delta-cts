import React, { useEffect } from 'react'
import useInput from '../hooks/use-input';
import './AccountUpdate.css'

const AccountUpdate = (props) => {
    useEffect(() => {
        console.log(props.user.dateOfBirth);
        document.getElementById('updateFullName').value = props.user.fullName;
        document.getElementById('updateUsername').value = props.user.username;
        document.getElementById('updatePassword').value = props.user.password;
        document.getElementById('updateEmail').value = props.user.email;
        document.getElementById('updateContactNumber').value = props.user.contactNumber;
        document.getElementById('updateAddress').value = props.user.address;
        document.getElementById('updateState').value = props.user.state;
        document.getElementById('updateCountry').value = props.user.country;
        document.getElementById('updateCitizenship').value = props.user.citizenship;
        document.getElementById('updateAccountType').value = props.user.accountType;
        document.getElementById('updateBankName').value = props.user.bankName;
        document.getElementById('updateBranchName').value = props.user.branchName;
        document.getElementById('updateInitialDepositAmount').value = +props.user.initialDepositAmount;
        document.getElementById('updateIdentificationType').value = props.user.identificationType;
        document.getElementById('updateIdentificationNumber').value = props.user.identificationNumber;
        document.getElementById('updateNomineeName').value = props.user.nomineeName;
        document.getElementById('updateNomineeAccountNumber').value = props.user.nomineeAccountNumber;
        document.getElementById('updateNomineeAddress').value = props.user.nomineeFullAddress;
        document.getElementById('updateGuardianName').value = props.user.guardianFullName;
        document.getElementById('updateGuardianType').value = props.user.guardianType;
    }, [props])

    let {
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

    let {
        value: enteredUsername,
        isValid: enteredUsernameIsValid,
        hasError: usernameInputHasError,
        valueChangeHandler: usernameChangedHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsernameInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInput(value => value.trim() !== '');

    let {
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

    let {
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

    let {
        value: enteredDOB,
        isValid: enteredDOBIsValid,
        hasError: DOBInputHasError,
        valueChangeHandler: DOBChangedHandler,
        inputBlurHandler: DOBBlurHandler,
        reset: resetDOBInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredAddress,
        isValid: enteredAddressIsValid,
        hasError: addressInputHasError,
        valueChangeHandler: addressChangedHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddressInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredState,
        isValid: enteredStateIsValid,
        hasError: stateInputHasError,
        valueChangeHandler: stateChangedHandler,
        inputBlurHandler: stateBlurHandler,
        reset: resetStateInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredCountry,
        isValid: enteredCountryIsValid,
        hasError: countryInputHasError,
        valueChangeHandler: countryChangedHandler,
        inputBlurHandler: countryBlurHandler,
        reset: resetCountryInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredCitizenship,
        isValid: enteredCitizenshipIsValid,
        hasError: citizenshipInputHasError,
        valueChangeHandler: citizenshipChangedHandler,
        inputBlurHandler: citizenshipBlurHandler,
        reset: resetCitizenshipInput
    } = useInput(value => value.trim() !== '');

    let {
        isValid: enteredGenderIsValid,
        hasError: genderInputHasError,
        valueChangeHandler: genderChangedHandler,
        inputBlurHandler: genderBlurHandler,
        reset: resetGenderInput
    } = useInput(value => value.trim() !== '');

    let {
        isValid: enteredMaritalStatusIsValid,
        hasError: maritalStatusInputHasError,
        valueChangeHandler: maritalStatusChangedHandler,
        inputBlurHandler: maritalStatusBlurHandler,
        reset: resetMaritalStatusInput
    } = useInput(value => value.trim() !== '');

    let {
        isValid: enteredAccountTypeIsValid,
        hasError: accountTypeInputHasError,
        valueChangeHandler: accountTypeChangedHandler,
        inputBlurHandler: accountTypeBlurHandler,
        reset: resetAccountTypeInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredBankName,
        isValid: enteredBankNameIsValid,
        hasError: bankNameInputHasError,
        valueChangeHandler: bankNameChangedHandler,
        inputBlurHandler: bankNameBlurHandler,
        reset: resetBankNameInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredBranchName,
        isValid: enteredBranchNameIsValid,
        hasError: branchNameInputHasError,
        valueChangeHandler: branchNameChangedHandler,
        inputBlurHandler: branchNameBlurHandler,
        reset: resetBranchNameInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredInitialDepositAmount,
        isValid: enteredInitialDepositAmountIsValid,
        hasError: initialDepositAmountInputHasError,
        valueChangeHandler: initialDepositAmountChangedHandler,
        inputBlurHandler: initialDepositAmountBlurHandler,
        reset: resetInitialDepositAmountInput
    } = useInput(value => value.trim() !== '');

    let {
        isValid: enteredIdentificationTypeIsValid,
        hasError: identificationTypeInputHasError,
        valueChangeHandler: identificationTypeChangedHandler,
        inputBlurHandler: identificationTypeBlurHandler,
        reset: resetIdentificationTypeInput
    } = useInput(value => value.trim() !== '');

    let {
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

    let {
        value: enteredNomineeName,
        isValid: enteredNomineeNameIsValid,
        hasError: nomineeNameInputHasError,
        valueChangeHandler: nomineeNameChangedHandler,
        inputBlurHandler: nomineeNameBlurHandler,
        reset: resetNomineeNameInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredNomineeAccountNumber,
        isValid: enteredNomineeAccountNumberIsValid,
        hasError: nomineeAccountNumberInputHasError,
        valueChangeHandler: nomineeAccountNumberChangedHandler,
        inputBlurHandler: nomineeAccountNumberBlurHandler,
        reset: resetNomineeAccountNumberInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredNomineeAddress,
        isValid: enteredNomineeAddressIsValid,
        hasError: nomineeAddressInputHasError,
        valueChangeHandler: nomineeAddressChangedHandler,
        inputBlurHandler: nomineeAddressBlurHandler,
        reset: resetNomineeAddressInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredGuardianName,
        isValid: enteredGuardianNameIsValid,
        hasError: guardianNameInputHasError,
        valueChangeHandler: guardianNameChangedHandler,
        inputBlurHandler: guardianNameBlurHandler,
        reset: resetGuardianNameInput
    } = useInput(value => value.trim() !== '');

    let {
        value: enteredGuardianType,
        isValid: enteredGuardianTypeIsValid,
        hasError: guardianTypeInputHasError,
        valueChangeHandler: guardianTypeChangedHandler,
        inputBlurHandler: guardianTypeBlurHandler,
        reset: resetGuardianTypeInput
    } = useInput(value => value.trim() !== '');

    console.log(enteredDOB);

    const handleUpdateOnSubmit = () => {
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

            <h1>Update Account Details</h1>
            <form className="border border-dark rounded update-form" onSubmit={handleUpdateOnSubmit}>

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="dateOfRegistration" className="dateOfRegistration">Account Registration Date : </label>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="dateValue">{props.user.accountRegistrationDate}</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-7 mb-3">
                        <label htmlFor="customerID" className="customerID">Customer ID : {props.user.customerID}</label>
                    </div>

                    <div className="col-md-5 mb-3">
                        <label htmlFor="accountNumber" className="accountNumber">Account Number : {props.user.accountNumber}</label>
                    </div>

                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateFullName">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateFullName"
                            placeholder="Full Name"
                            onChange={nameChangedHandler}
                            onBlur={nameBlurHandler}
                            // value={enteredName}
                            required
                        />
                        {nameInputHasError && (<p className="error-text">Special Characters not allowed</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateUsername">Username</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="updateUsername"
                                placeholder="Username"
                                onChange={usernameChangedHandler}
                                onBlur={usernameBlurHandler}
                                // value={enteredUsername}
                                required
                            />
                        </div>
                        {usernameInputHasError && (<p className="error-text">Username cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="updatePassword">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="updatePassword"
                            placeholder="Password"
                            onChange={passwordChangedHandler}
                            onBlur={passwordBlurHandler}
                            // value={enteredPassword}
                            required
                        />
                        {passwordInputHasError && (<p className="error-text">Password cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateEmail">Email</label>
                        <input type="email"
                            className="form-control"
                            id="updateEmail"
                            placeholder="abc@xyz.com"
                            onChange={emailChangedHandler}
                            onBlur={emailBlurHandler}
                            // value={enteredEmail}
                            required
                        />
                        {emailInputHasError && (<p className="error-text">Please enter a valid email address</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateContactNumber">Contact Number</label>
                        <input
                            type="number"
                            className="form-control"
                            id="updateContactNumber"
                            placeholder="10-digit number"
                            onChange={contactChangedHandler}
                            onBlur={contactBlurHandler}
                            // value={enteredContact}
                            required
                        />
                        {contactInputHasError && (<p className="error-text">Please enter a valid 10-digit number</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateDateOfBirth">Date of Birth</label>
                        <input type="date"
                            className="form-control"
                            id="updateDateOfBirth"
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
                        <label htmlFor="updateAddress">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateAddress"
                            placeholder="Address"
                            onChange={addressChangedHandler}
                            onBlur={addressBlurHandler}
                            // value={enteredAddress}
                            required
                        />
                        {addressInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateState">State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateState"
                            placeholder="State"
                            onChange={stateChangedHandler}
                            onBlur={stateBlurHandler}
                            // value={enteredState}
                            required
                        />
                        {stateInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateCountry">Country</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateCountry"
                            placeholder="Country"
                            onChange={countryChangedHandler}
                            onBlur={countryBlurHandler}
                            // value={enteredCountry}
                            required
                        />
                        {countryInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateCitizenship">Citizenship</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateCitizenship"
                            placeholder="Citizenship"
                            onChange={citizenshipChangedHandler}
                            onBlur={citizenshipBlurHandler}
                            // value={enteredCitizenship}
                            required
                        />
                        {citizenshipInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <div className="gender-radio-btn">
                            <label htmlFor="updateGender">Gender</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio" name="updateGender"
                                    id="updateGenderMale"
                                    value="Male"
                                    onChange={genderChangedHandler}
                                    onBlur={genderBlurHandler}
                                    required
                                />
                                <label className="form-check-label" htmlFor="updateGenderMale">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="updateGender"
                                    id="updateGenderFemale"
                                    value="Female"
                                    onChange={genderChangedHandler}
                                    onBlur={genderBlurHandler}
                                    required />
                                <label className="form-check-label" htmlFor="updateGenderFemale">Female</label>
                            </div>
                        </div>
                        {genderInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="marital-radio-btn">
                            <label htmlFor="updateMaritalStatus">Marital Status</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="updateMaritalStatus"
                                    id="updateMaritalStatusSingle"
                                    value="Single"
                                    onChange={maritalStatusChangedHandler}
                                    onBlur={maritalStatusBlurHandler}
                                    required
                                />
                                <label className="form-check-label" htmlFor="updateMaritalStatusSingle">Single</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="updateMaritalStatus"
                                    id="updateMaritalStatusMarried"
                                    value="Married"
                                    onChange={maritalStatusChangedHandler}
                                    onBlur={maritalStatusBlurHandler}
                                    required
                                />
                                <label className="form-check-label" htmlFor="updateMaritalStatusMarried">Married</label>
                            </div>
                        </div>
                        {maritalStatusInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateAccountType">Account Type</label>
                        <select
                            className="custom-select"
                            id="updateAccountType"
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
                        <label htmlFor="updateBankName">Bank Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateBankName"
                            placeholder="Bank Name"
                            onChange={bankNameChangedHandler}
                            onBlur={bankNameBlurHandler}
                            // value={enteredBankName}
                            required
                        />
                        {bankNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="updateBranchName">Branch Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateBranchName"
                            placeholder="Branch Name"
                            onChange={branchNameChangedHandler}
                            onBlur={branchNameBlurHandler}
                            // value={enteredBranchName}
                            required
                        />
                        {branchNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateInitialDepositAmount">Initial Deposit Amount</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend1"><strong>₹</strong></span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="updateInitialDepositAmount"
                                placeholder="Amount (in Rupees)"
                                aria-describedby="inputGroupPrepend1"
                                onChange={initialDepositAmountChangedHandler}
                                onBlur={initialDepositAmountBlurHandler}
                                // value={enteredInitialDepositAmount}
                                min='1'
                                required
                            />
                        </div>
                        {initialDepositAmountInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="updateIdentificationType">Identification Type</label>
                        <select
                            className="custom-select"
                            id="updateIdentificationType"
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
                        <label htmlFor="updateIdentificationNumber">Identification Document No</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateIdentificationNumber"
                            placeholder="Identification No"
                            onChange={identificationNumberChangedHandler}
                            onBlur={identificationNumberBlurHandler}
                            // value={enteredIdentificationNumber}
                            required
                        />
                        {identificationNumberInputHasError && (<p className="error-text">Please enter a valid value</p>)}
                    </div>

                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="updateNomineeName">Nominee Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateNomineeName"
                            placeholder="Nominee Name"
                            onChange={nomineeNameChangedHandler}
                            onBlur={nomineeNameBlurHandler}
                            // value={enteredNomineeName}
                            required
                        />
                        {nomineeNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="updateNomineeAccountNumber">Nominee Account Number</label>
                        <input
                            type="number"
                            className="form-control"
                            id="updateNomineeAccountNumber"
                            placeholder="Nominee Account No"
                            onChange={nomineeAccountNumberChangedHandler}
                            onBlur={nomineeAccountNumberBlurHandler}
                            // value={enteredNomineeAccountNumber}
                            required
                        />
                        {nomineeAccountNumberInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md mb-3">
                        <label htmlFor="updateNomineeAddress">Nominee Full Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateNomineeAddress"
                            placeholder="Nominee Address"
                            onChange={nomineeAddressChangedHandler}
                            onBlur={nomineeAddressBlurHandler}
                            // value={enteredNomineeAddress}
                            required
                        />
                        {nomineeAddressInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="updateGuardianName">Guardian Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateGuardianName"
                            placeholder="Guardian Full Name"
                            onChange={guardianNameChangedHandler}
                            onBlur={guardianNameBlurHandler}
                            // value={enteredGuardianName}
                            required
                        />
                        {guardianNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="updateGuardianType">Guardian Type/ Relationship</label>
                        <input
                            type="text"
                            className="form-control"
                            id="updateGuardianType"
                            placeholder="Guardian Type/ Relationship"
                            onChange={guardianTypeChangedHandler}
                            onBlur={guardianTypeBlurHandler}
                            // value={enteredGuardianType}
                            required
                        />
                        {guardianTypeInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />
                <br />

                <div className="d-flex justify-content-center">
                    <button className="btn btn-lg btn-outline-dark btn-block font-weight-bold" type="submit">UPDATE DETAILS</button>
                </div>

            </form>

        </div>
    )
}

export default AccountUpdate
