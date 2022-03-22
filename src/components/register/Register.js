import React from "react";

const Register = ({onRouteChange}) => {
    return (
        <div>
            <article className="mw6 shadow-5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id='sign_up' className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor='name'>Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name"></input>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor='email-address'>Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"></input>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor='password'>Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type='password' name="password" id='password'></input>
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick={() => onRouteChange('signin')}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type='submit' 
                            value='Register'></input>
                        </div>
                    </form>
                </main>
            </article>
        </div>
    );
};

export default Register;