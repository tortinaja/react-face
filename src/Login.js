import React from 'react'

    function Login() {
        return (
            <section className="Logintest">
                <div>
                    <div className="Login__header">กรุณาใส่ชื่อและนามสกุล</div>
                    <p> ชื่อ : <input className="Login__name" type="text" /> นามสกุล : <input className="Login__pass" type="text" /> <button className="acceptlogin">OK!</button></p>
                </div>
            </section>
        );
    }

export default Login;