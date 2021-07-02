import React from 'react';


export const SignUpModal = ({ onSubmit }) => {
    return (

        <form onSubmit={onSubmit}>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" id="password" />
            </div>
            <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input className="form-control" id="confirm-password" />
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="create-your-account">
                    create your account
                </button>
            </div>
        </form>
    );
};
export default SignUpModal;