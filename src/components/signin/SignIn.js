import React from "react";

const SignIn = ({onRouteChange}) => {
    return (
        <div>
            <article className="mw6 shadow-5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id='sign_up' className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for='email-address'>Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"></input>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for='password'>Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type='password' name="password" id='password'></input>
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick={() => onRouteChange('home')}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type='submit' 
                            value='Sign in'></input>
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#0" className="f6 link dim black db">Register Here</a>
                        </div>
                    </form>
                </main>
            </article>
        </div>
    );
};

export default SignIn;