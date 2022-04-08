import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className='login_main' style={{ paddingTop: '30px', alignItems: 'center', textAlign: 'center', fontFamily: "arial", minHeight: '500px' }}>

            <form style={{
                background: `linear-gradient(to right, #267871, #136a8a)`, paddingTop: '40px', borderRadius: '15px',
                paddingBottom: '80px', marginTop: '50px', marginLeft: '400px', marginRight: '400px',alignContent:'center',alignItems:'center',textAlign:'center',
                boxShadow: `0px 2px 10px rgba(0,0,0,0.2), 0px 10px 20px rgba(0,0,0,0.3), 0px 30px 60px 1px rgba(0,0,0,0.5)`
            }}>
                <div class='head'>
                    <h1 class='company'>Login your credential</h1>
                </div>
                <p class='msg'>Welcome back</p>
                <div style={{ paddingTop: '30px',alignItems:'center' }}>
                    <span>NAME</span>
                    <div>
                        <input type='name' value={name} id='id' required placeholder="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div>
                    <span style={{marginTop:'100px'}}>EMAIL</span>
                    <div>
                        <input type='name' value={email} id='id' required placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <button className='btn' style={{marginTop:'10px',padding:'5px 5px'}} type='submit'>Login</button>

            </form>
        </div>
    )
}

export default Login