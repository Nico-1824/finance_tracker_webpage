import './Login.css';
import './util/helper.js';

function Login() {


    return (
        <>
            <div id='body'>
                <div id='container'>
                    <h1>Login to Your Account</h1>
                    <input type='text' placeholder="Username"></input>
                    <input type='text' placeholder="Password"></input>
                    <button type="submit">Login</button>
                </div>
            </div>
        </>
    );
}

export default Login;