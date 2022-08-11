const React = require("react");

class Home extends React.Component{
    render(){
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
                <nav>
                    <div className="titleNav"><a href='/' className="anchorTitle">I<span>N</span>FLORESCE<span>N</span>CE</a></div>
                    <a href='/login' className="login">LOGIN</a>
                </nav>
                <div className="landing">
                    <div className="container">
                            <div className="title">I<span>N</span>FLORESCE<span>N</span>CE</div>
                    </div>
                  
                    <img src="/media/bust.png"></img>
                </div>
            </body>
            </html>
        );
    }
}
 
module.exports = Home;