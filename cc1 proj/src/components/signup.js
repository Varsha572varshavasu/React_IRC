import React, { Component } from 'react'
import './signup.css';
export default class SignUp extends Component {
    render() {
        return (
            <div className="bg2">
            <div className="borders">
            <form>
                <h3>Sign Up</h3>

                <div className="mb-3">
                    {/* <label>First name</label> */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        required
                    />
                </div>
                <div className="mb-3">
                    {/* <label>Last name</label> */}
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    {/* <label>Email address</label> */}
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    {/* <label>Password</label> */}
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    {/* <label>Password</label> */}
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password-text-right">
                    <a class = "registered" href="/sign-in">Already registered signin?</a>
                </p>
            </form>
            </div>
            </div>
        )
    }
}