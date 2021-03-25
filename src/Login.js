import React from 'react'

    function Login() {
        return (
            <section className="Logintest">
                <div>
                    <div className="Login__header">กรุณาใส่ชื่อและนามสกุล</div>
                    <p> ชื่อ : <input className="Login__name" type="text" /> นามสกุล : <input className="Login__pass" type="text" /></p>
                    <input className="submituser" type="submit" value="OK!" />
                </div>
            </section>
        );
    }

export default Login;