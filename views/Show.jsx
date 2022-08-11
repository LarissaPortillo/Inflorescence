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
                <link rel="stylesheet" href="/css/show.css"></link>
                <script src="https://kit.fontawesome.com/398a8dbccf.js" crossorigin="anonymous"></script>
                <link href="https://fonts.cdnfonts.com/css/drugs" rel="stylesheet"></link>
                <title>Show</title>
            </head>
            <body>
                <nav>
                    <a href='/' className="titleNav">I<span>N</span>FLORESCE<span>N</span>CE</a>
                    <a href='/' className="login">LOGOUT</a>
                </nav>
                <div className='container'>
                    <div className='left'>
                        <img src={flower.defaultPic} alt={flower.defaultAlt}></img>
                    </div>
                    <div className='right'>
                        <h3>{flower.name.charAt(0).toUpperCase()+flower.name.slice(1).toLowerCase()}</h3>
                        <h3>{`${flower.price}`}</h3>
                        <p>{`${flower.description}`}</p>
                        {flower.inventory===0? 'out of stock' : `Inventory: ${flower.inventory}` }
                        {flower.inventory===0?  <button disabled='true' class="cBtn" id="nostock" >Sorry no stock</button>  : <button id="cartBtn">Add to Cart<i id="cart" class="fa fa-cart-plus" aria-hidden="true"></i></button> }
                        <form action={`/flor/${flower.id}?_method=DELETE`} method='POST'>
                            <button type="submit">Delete</button>
                        </form>
                        <a href='/flor'>Back to Home Page</a>
                    </div>
                </div>
               
            </body>
            </html>
        );
    }
}


module.exports = Show;