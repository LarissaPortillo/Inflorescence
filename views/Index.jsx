const React = require("react");

class Index extends React.Component{
    render(){
        const { flower } = this.props;
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Index</title>
            </head>
            <body>
                <ul>
                    {flower.map((f)=>{
                        return(
                            <li>
                                <img src={f.defaultPic}></img>
                                {` ${f.name}, descrip: ${f.description}`},
                                {f.inventory===0 ? 'out of stock' : `${f.price}` }
                            </li>
                        )
                    })}
                </ul>
            </body>
            </html>
        );
    }
}


module.exports = Index;