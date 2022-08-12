const React = require("react");

class Home extends React.Component{
    render(){
        const { user } = this.props;
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/css/home.css"></link>
                <title>Inflorescence</title>
            </head>
            <body>  
                {user ? 
                <nav>
                    <div className="titleNav"><a href='/' className="anchorTitle">I<span>N</span>FLORESCE<span>N</span>CE</a></div>
                    <a href='/logout' className="login">LOGOUT</a>                         
                </nav>
                :
                <nav>
                    <div className="titleNav"><a href='/' className="anchorTitle">I<span>N</span>FLORESCE<span>N</span>CE</a></div>
                    <a href='/login' className="login">LOGI<span>N</span></a>
                </nav>
                }
               
                
                <div className="landing">
                    {user ? 
                        <div className='greetingContain'><div class="greeting"> Welcome, {user.name}</div></div>
                        :
                        <div className='greetingContain'><div class="greeting"> Welcome, Stranger</div></div>
                    }
                    <div className="container">
                            <div className="title">I<span>N</span>FLORESCE<span>N</span>CE</div>
                    </div>
                  
                    <img src="/media/bust.png"></img>
                    <div><a className='anchorBtn' href='/flor'>Start Shopping</a></div>
                </div>
            </body>
            </html>
        );
    }
}
 
module.exports = Home;