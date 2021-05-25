import React from 'react'
import './ApplyLoan.css'
import EducationLoan from './EducationLoan'
import useInput from '../hooks/use-input'
import PersonalLoan from './PersonalLoan'

const ApplyLoan = () => {

    const {
        value: enteredLoanType,
        isValid: enteredLoanTypeIsValid,
        hasError: loanTypeInputHasError,
        valueChangeHandler: loanTypeChangedHandler,
        inputBlurHandler: loanTypeBlurHandler,
        reset: resetLoanTypeInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredLoanAmount,
        isValid: enteredLoanAmountIsValid,
        hasError: loanAmountInputHasError,
        valueChangeHandler: loanAmountChangedHandler,
        inputBlurHandler: loanAmountBlurHandler,
        reset: resetLoanAmountInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredLoanApplyDate,
        isValid: enteredLoanApplyDateIsValid,
        hasError: loanApplyDateInputHasError,
        valueChangeHandler: loanApplyDateChangedHandler,
        inputBlurHandler: loanApplyDateBlurHandler,
        reset: resetLoanApplyDateInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredLoanIssueDate,
        isValid: enteredLoanIssueDateIsValid,
        hasError: loanIssueDateInputHasError,
        valueChangeHandler: loanIssueDateChangedHandler,
        inputBlurHandler: loanIssueDateBlurHandler,
        reset: resetLoanIssueDateInput
    } = useInput(value => value.trim() !== '');

    // const {
    //     value: enteredRateOfInterest,
    //     isValid: enteredRateOfInterestIsValid,
    //     hasError: rateOfInterestInputHasError,
    //     valueChangeHandler: rateOfInterestChangedHandler,
    //     inputBlurHandler: rateOfInterestBlurHandler,
    //     reset: resetRateOfInterestInput
    // } = useInput(value => value.trim() !== '');

    const {
        value: enteredDuration,
        isValid: enteredDurationIsValid,
        hasError: durationInputHasError,
        valueChangeHandler: durationChangedHandler,
        inputBlurHandler: durationBlurHandler,
        reset: resetDurationInput
    } = useInput(value => value.trim() !== '');


    const handleLoanOnSubmit = () => {
        console.log('In handleLoanOnSubmit');
        if (!enteredLoanTypeIsValid || !enteredLoanAmountIsValid || !enteredLoanApplyDateIsValid || !enteredLoanIssueDateIsValid || !enteredDurationIsValid) {
            return;
        }

        resetLoanTypeInput();
        resetLoanAmountInput();
        resetLoanApplyDateInput();
        resetLoanIssueDateInput();
        // resetRateOfInterestInput();
        resetDurationInput();
    };


    let rateOfInterest = '';
    if(enteredLoanTypeIsValid)
        rateOfInterest = enteredLoanType === 'Personal'? '10.55 % p.a.' : enteredLoanType === 'Housing' ? '6.65 % p.a. ' : '7.30 % p.a.';

    return (
        <div className="div-form">

            <h1 className="header">Apply for loan</h1>

            <form className="border border-dark rounded loan-form" onSubmit={handleLoanOnSubmit}>

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="loanType">Loan Type</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <select
                            className="custom-select"
                            id="loanType"
                            onChange={loanTypeChangedHandler}
                            onBlur={loanTypeBlurHandler}
                            required
                        >
                            <option value=''>------------------- Select -------------------</option>
                            <option value="Personal">Personal Loan</option>
                            <option value="Housing">Housing Loan</option>
                            <option value="Education">Education Loan</option>
                        </select>
                        {loanTypeInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="loanAmount">Loan Amount</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend1"><strong>₹</strong></span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="loanAmount"
                                placeholder="Loan Amount (in Rupees)"
                                aria-describedby="inputGroupPrepend1"
                                step=".01"
                                onChange={loanAmountChangedHandler}
                                onBlur={loanAmountBlurHandler}
                                value={enteredLoanAmount}
                                required
                            />
                        </div>
                        {loanAmountInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="loanApplyDate">Loan Apply Date</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="date"
                                className="form-control"
                                id="loanApplyDate"
                                placeholder="Username"
                                min={new Date().toISOString().split("T")[0]}
                                onChange={loanApplyDateChangedHandler}
                                onBlur={loanApplyDateBlurHandler}
                                value={enteredLoanApplyDate}
                                required
                            />
                        </div>
                        {loanApplyDateInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="loanIssueDate">Loan Issue Date</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="date"
                                className="form-control"
                                id="loanIssueDate"
                                placeholder="Username"
                                min={new Date().toISOString().split("T")[0]}
                                onChange={loanIssueDateChangedHandler}
                                onBlur={loanIssueDateBlurHandler}
                                value={enteredLoanIssueDate}
                                required
                            />
                        </div>
                        {loanIssueDateInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="loanRateOfInterest">Rate of Interest</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="loanRateOfInterest"
                                placeholder={rateOfInterest}
                                aria-describedby="basic-addon2"
                                step=".01"
                                defaultValue={rateOfInterest}
                                disabled
                            />
                        </div>
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="loanDuration">Duration of the Loan</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <select
                                className="custom-select"
                                id="loanType"
                                onChange={durationChangedHandler}
                                onBlur={durationBlurHandler}
                                value={enteredDuration}
                                required
                            >
                                <option value=''>------------------- Select -------------------</option>
                                <option value="5">5 years</option>
                                <option value="10">10 years</option>
                                <option value="15">15 years</option>
                                <option value="20">20 years</option>
                            </select>
                        </div>
                        {durationInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                {enteredLoanType === 'Education' ? <EducationLoan loanType={enteredLoanType} /> : <React.Fragment />}
                {enteredLoanType === 'Personal' || enteredLoanType === 'Housing' ? <PersonalLoan loanType={enteredLoanType} /> : <React.Fragment />}

                <br />

                <div className="d-flex justify-content-center">
                    <button className="btn btn-lg btn-outline-dark btn-block font-weight-bold" type="submit">APPLY FOR LOAN</button>
                </div>

            </form>

        </div>
    )
}

export default ApplyLoan
