const React = require("react");

class Login extends React.Component{
    render(){
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/css/login.css"></link>
                <script src="https://kit.fontawesome.com/398a8dbccf.js" crossorigin="anonymous"></script>
                <title>Login</title>
            </head>
            <body>
                <nav>
                    <div className="titleNav"><a href='/' className='anchorTitle'>I<span className='bckwrds'>N</span>FLORESCE<span className='bckwrds'>N</span>CE</a></div>
                </nav>

                <div className="container">
                    <div className="section">
                        <form >
                            <h2 className="title">LOGI<span className='bckwrds'>N</span></h2>
                            <div className='fg'>
                                <input className='fs' type='text' name='username' placeholder='Your Username' id='logusername' className="fs" required></input>
                                 <i className="input-icon fa-solid fa-at"></i>
                            </div>
                            <div className='username error' ></div>
                            <div className="fg">
                                <input className='fs' type='password' name='password' placeholder='Your Password' log='logpass' className="fs" required></input>
                                <i class="input-icon fa-solid fa-lock"></i>
                            </div>
                            <div className='password error'></div>
                            <input className='login' type='submit' name='' value='Login'></input>
                            <br></br>
                            <br></br>
                            <a className='redirSign' href='/signup'>First time? Sign up here!</a>
                        </form> 
                    </div>
                   
                </div>
                        
                <script src='/js/login.js'></script>               
            </body>
            </html>
        );
    }
}


module.exports = Login;