import React from 'react'
import useInput from '../hooks/use-input';

import './EducationLoan.css'

const EducationLoan = (props) => {

    const {
        value: enteredCourseFees,
        hasError: courseFeesInputHasError,
        valueChangeHandler: courseFeesChangedHandler,
        inputBlurHandler: courseFeesBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredCourseName,
        hasError: courseNameInputHasError,
        valueChangeHandler: courseNameChangedHandler,
        inputBlurHandler: courseNameBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredFatherName,
        hasError: fatherNameInputHasError,
        valueChangeHandler: fatherNameChangedHandler,
        inputBlurHandler: fatherNameBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredFatherOccupation,
        hasError: fatherOccupationInputHasError,
        valueChangeHandler: fatherOccupationChangedHandler,
        inputBlurHandler: fatherOccupationBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredFatherTotalExperience,
        hasError: fatherTotalExperienceInputHasError,
        valueChangeHandler: fatherTotalExperienceChangedHandler,
        inputBlurHandler: fatherTotalExperienceBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredFatherCurrentExperience,
        hasError: fatherCurrentExperienceInputHasError,
        valueChangeHandler: fatherCurrentExperienceChangedHandler,
        inputBlurHandler: fatherCurrentExperienceBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredRationCardNumber,
        hasError: rationCardNumberInputHasError,
        valueChangeHandler: rationCardNumberChangedHandler,
        inputBlurHandler: rationCardNumberBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredAnnualIncome,
        hasError: annualIncomeInputHasError,
        valueChangeHandler: annualIncomeChangedHandler,
        inputBlurHandler: annualIncomeBlurHandler,
    } = useInput(value => value.trim() !== '');

    return (
        <div className="div-form ">

            <h2 className="education">{props.loanType} Loan</h2>
            <div className=" educationLoan-form">
                <div className="form-row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Course Fees</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend1"><strong>₹</strong></span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Course Fees (in Rupees)"
                                aria-describedby="inputGroupPrepend1"
                                step=".01"
                                onChange={courseFeesChangedHandler}
                                onBlur={courseFeesBlurHandler}
                                value={enteredCourseFees}
                                required
                            />
                        </div>
                        {courseFeesInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Course</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Course Name"
                                onChange={courseNameChangedHandler}
                                onBlur={courseNameBlurHandler}
                                value={enteredCourseName}
                                required
                            />
                        </div>
                        {courseNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Father's Name</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Father's Name"
                                onChange={fatherNameChangedHandler}
                                onBlur={fatherNameBlurHandler}
                                value={enteredFatherName}
                                required
                            />
                        </div>
                        {fatherNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Father's Occupation</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Father's Occupation"
                                onChange={fatherOccupationChangedHandler}
                                onBlur={fatherOccupationBlurHandler}
                                value={enteredFatherOccupation}
                                required
                            />
                        </div>
                        {fatherOccupationInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Father's Total Experience</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Father's Total Experience"
                                onChange={fatherTotalExperienceChangedHandler}
                                onBlur={fatherTotalExperienceBlurHandler}
                                value={enteredFatherTotalExperience}
                                required
                            />
                        </div>
                        {fatherTotalExperienceInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Father's Exp. w/ Current Company</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Father's Exp. w/ Current Company"
                                onChange={fatherCurrentExperienceChangedHandler}
                                onBlur={fatherCurrentExperienceBlurHandler}
                                value={enteredFatherCurrentExperience}
                                required
                            />
                        </div>
                        {fatherCurrentExperienceInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Ration Card Number</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Ration Card Number"
                                onChange={rationCardNumberChangedHandler}
                                onBlur={rationCardNumberBlurHandler}
                                value={enteredRationCardNumber}
                                required
                            />
                        </div>
                        {rationCardNumberInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Annual Income</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend1"><strong>₹</strong></span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Annual Income (in Rupees)"
                                aria-describedby="inputGroupPrepend1"
                                step=".01"
                                onChange={annualIncomeChangedHandler}
                                onBlur={annualIncomeBlurHandler}
                                value={enteredAnnualIncome}
                                required
                            />
                        </div>
                        {annualIncomeInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EducationLoan
