import './Login.css';
import illustration from './illustration.png'
import group from './group.png';
import illustration1 from './illustration (1).png'
import group4 from './Group 4.png'

function Login(){

        return(

            <div className='main-div'>

                <div className="Login-Div">

                    <div className="Left-Div">
                    <img src={group4} id='sec-img'></img>
                        <img src={illustration1}></img>
                        
                        
                    </div>

                    <div className='Right-Div'>
                   
                        <img src={group}></img>
                        
                        <h1 className='heading'>Login Into Your Account</h1>
                        <div className='btn-div'>
                        <button className='google'>sign with google</button>
                        <button className='email'>or sign with email</button>
                        <p id='email'>Email</p>
                        <input type='email' className='email-cont' required placeholder='abc@gmail.com'></input>
                        <p id='password'>Password</p>
                        <input type='password' className='password' placeholder='*****'></input>
                        <button className='login-btn'>Login</button>
                        </div>
                    </div>
                </div>

            </div>

        );
}

export default Login;