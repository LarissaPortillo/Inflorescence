const React = require("react");

class Login extends React.Component{
    render(){
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* <link rel="stylesheet" href="/css/login.css"></link> */}
                <link href="https://fonts.cdnfonts.com/css/drugs" rel="stylesheet"></link>
                <title>Login</title>
            </head>
            <body>
                <nav>
                    <div className="titleNav"><a href='/' className="anchorTitle">I<span>N</span>FLORESCE<span>N</span>CE</a></div>
                </nav>

{/*                 
                <div class="main">  	
                    <input type="checkbox" id="chk" aria-hidden="true"/>

                        <div class="signup">
                            <form>
                                <label for="chk" aria-hidden="true">SIG<span>N</span> UP</label>
                                <input type="text" name="txt" placeholder="Username" required=""/>
                                <input type="password" name="pswd" placeholder="Password" required=""/>
                                <button>LOGI<span>N</span></button>
                            </form>
                        </div>

                    <div class="login">
                        <form>
                            <label for="chk" aria-hidden="true">LOGI<span>N</span></label>
                            <input type="email" name="email" placeholder="Username" required=""/>
                            <input type="password" name="pswd" placeholder="Password" required=""/>
                            <button>LOGI<span>N</span></button>
                        </form>
                    </div>
                </div> */}
                    {/* <input type='checkbox' id='check' aria-hidden='true'></input>
                <div class='signup'>
                    <form action='/' method='POST'>
                        <label for='check' aria-hidden='true'>Sign Up</label>
                        <input type='text' name='username' placeholder='Username'></input>
                        <input type='text' name='password' placeholder='Password'></input>
                        <button type='submit' name='' value='SignUp'>Sign up</button>
                    </form>
                </div>

                <div class='login'>
                  <form action='POST'>
                    <label for='check' aria-hidden="true">Login</label>
                    <input type='text' name='username' placeholder='Username'></input>
                    <br></br>
                    <input type='text' name='password' placeholder='Password'></input>
                    <br></br>
                    <button type='submit' name='' value='Login'>Login</button>
                </form>  
                </div> */}

                
                        <form>
                            Username: <input type='text' name='username' required></input>
                            <div className='username error'></div>
                            Password: <input type='password' name='password' required></input>
                            <div className='password error'></div>
                            <input type='submit' name='' value='Login'></input>
                        </form>
                        <script src='/js/login.js'></script>
                
            </body>
            </html>
        );
    }
}


module.exports = Login;