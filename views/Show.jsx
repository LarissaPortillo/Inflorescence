const React = require("react");

class Show extends React.Component{
    render(){
        const flower = this.props.flower;
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Show</title>
            </head>
            <body>
                <nav>
                    <div className="titleNav">I<span>N</span>FLORESCE<span>N</span>CE</div>
                    <a href='/login' class="login">LOGI<span>N</span></a>
                </nav>
                <img src={flower.defaultPic} alt={flower.defaultAlt}></img>
                <h3>{flower.name.charAt(0).toUpperCase()+flower.name.slice(1).toLowerCase()}</h3>
                <h3>{`${flower.price}`}</h3>
                <p>{`${flower.description}`}</p>
                {flower.inventory===0? 'OUT OF STOCK':flower.inventory}
                {flower.inventory===0? 'OUT OF STOCK':<button>Add to Cart</button>}
                <form action={`/flor/${flower.id}?_method=DELETE`} method='POST'>
                    <button type="submit">Delete</button>
                </form>
                <a href='/flor'>Back to Home Page</a>
            </body>
            </html>
        );
    }
}


module.exports = Show;