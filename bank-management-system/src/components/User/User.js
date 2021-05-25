import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './User.css'
class User extends Component {

    render() {
        // console.log(this.state.user);
        return (
            <div>
                <div className='user-details'>
                    <Link to='/applyLoan' className="btn btn-primary">Apply for Loan</Link>
                    <br />
                    <Link to='/update' className="btn btn-primary">Update User details</Link>
                </div>
            </div>
        )
    }

}

export default User
