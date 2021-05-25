import React from 'react'
import useInput from '../hooks/use-input';
import './PersonalLoan.css'

const PersonalLoan = (props) => {

    const {
        value: enteredAnnualIncome,
        hasError: annualIncomeInputHasError,
        valueChangeHandler: annualIncomeChangedHandler,
        inputBlurHandler: annualIncomeBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredCompanyName,
        hasError: companyNameInputHasError,
        valueChangeHandler: companyNameChangedHandler,
        inputBlurHandler: companyNameBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredDesignation,
        hasError: designationInputHasError,
        valueChangeHandler: designationChangedHandler,
        inputBlurHandler: designationBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredTotalExperience,
        hasError: totalExperienceInputHasError,
        valueChangeHandler: totalExperienceChangedHandler,
        inputBlurHandler: totalExperienceBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredCurrentExperience,
        hasError: currentExperienceInputHasError,
        valueChangeHandler: currentExperienceChangedHandler,
        inputBlurHandler: currentExperienceBlurHandler,
    } = useInput(value => value.trim() !== '');

    return (
        <div className="div-form ">

            <h2 className="personal">{props.loanType} Loan</h2>
            <div className=" personalLoan-form">
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

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Company Name</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Company Name"
                                onChange={companyNameChangedHandler}
                                onBlur={companyNameBlurHandler}
                                value={enteredCompanyName}
                                required
                            />
                        </div>
                        {companyNameInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Designation</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Designation"
                                onChange={designationChangedHandler}
                                onBlur={designationBlurHandler}
                                value={enteredDesignation}
                                required
                            />
                        </div>
                        {designationInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Total Experience</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Total Experience"
                                onChange={totalExperienceChangedHandler}
                                onBlur={totalExperienceBlurHandler}
                                value={enteredTotalExperience}
                                required
                            />
                        </div>
                        {totalExperienceInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

                <br />

                <div className="form-row">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="registrationFullName">Exp. w/ Current Company</label>
                    </div>

                    <div className="col-md-7 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="registrationUsername"
                                placeholder="Exp. w/ Current Company"
                                onChange={currentExperienceChangedHandler}
                                onBlur={currentExperienceBlurHandler}
                                value={enteredCurrentExperience}
                                required
                            />
                        </div>
                        {currentExperienceInputHasError && (<p className="error-text">This field cannot be empty</p>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PersonalLoan
