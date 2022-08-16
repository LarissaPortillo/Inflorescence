const React = require("react");

class SignUp extends React.Component{
    render(){
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/css/login.css"></link>
                <link href="https://fonts.cdnfonts.com/css/drugs" rel="stylesheet"></link>
                <script src="https://kit.fontawesome.com/398a8dbccf.js" crossorigin="anonymous"></script>
                <title>SignUp</title>
            </head>
            <body>
                <nav>
                    <div className="titleNav"><a href='/' className='anchorTitle'>I<span className='bckwrds'>N</span>FLORESCE<span className='bckwrds'>N</span>CE</a></div>
                </nav>
                <div className="container">
                   <div className='section'>
                        <form>
                            <h2 className="title">SIG<span className='bckwrds'>N</span> UP</h2>
                            <div className='fg'>
                                <input  className='fs' type='text' name='name' placeholder='Your Name' required></input>
                                <i class="input-icon fa-solid fa-user"></i>
                            </div>                            
                            <div className='fg'>
                                <input className='fs' type='text' name='username' placeholder='Your Username' id='logusername' className="fs" required></input>
                                 <i className="input-icon fa-solid fa-at"></i>
                            </div>
                            <div className='username error'></div>
                            <div className="fg">
                                <input className='fs' type='password' name='password' placeholder='Your Password' log='logpass' className="fs" required></input>
                                <i class="input-icon fa-solid fa-lock"></i>
                            </div>
                            <div className='password error'></div>
                            <input className='signup' type='submit' name='' value='Sign Up'></input>
                        </form>
                    </div> 
                </div>
                
                <script src='/js/signup.js'></script>
            </body>
            </html>
        );
    }
}


module.exports = SignUp;