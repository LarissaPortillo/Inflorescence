const React = require('react');

class New extends React.Component{
    render(){
        return(
            <html lang='en'>
            <head>
                <meta charSet='UTF-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <link rel='stylesheet' href='/css/new.css'></link>
                <title>New</title>
            </head>
            <body>
                <nav>
                    <div className='titleNav'><a href='/' className='anchorTitle'>I<span className='bckwrds'>N</span>FLORESCE<span className='bckwrds'>N</span>CE</a></div>
                    <a href='/logout' className='login'>LOGOUT</a>                         
                </nav>
                <h2>Create a new product. Fill out every section.</h2>
                <div className='container'>
                    <form action='/flor' method='POST'>
                        <ul>
                            <li>
                                <label for='defaultPic'>Default image link: </label><input type='url' name='defaultPic'></input>
                                <span clasName='form'>Enter the image address (eg: https://blahblah.jpg)</span>                                           
                            </li> 
                            <li>
                                <label for='name'>Name: </label><input type='text' name='name'></input>
                                <span clasName='form'>Enter name of the product</span>                       
                            </li> 
                            <li>
                                <label for='price'>Price:</label> <input type='number' name='price' step='any' min='0'></input>
                                <span clasName='form'>Enter the price of the product. Numbers only.</span>                     
                            </li> 
                            <li>
                                <label for='inventory'>Inventory:</label> <input type='number' name='inventory' min='0'></input>
                                <span clasName='form'>Enter the amount of available product stock. Numbers only.</span> 
                            </li> 
                            <li>
                                <label for='description'>Product Detail: </label><textarea type='text' name='description' ></textarea>
                                <span clasName='form' >Write a description of the product for customers to see.</span>                     
                            </li> 
                            <li>
                                <label for='defaultAlt'>Image description (image alt): </label><input type='text' name='defaultAlt'></input>
                                <span clasName='form'>Write a caption for the image. Customer's will not see this. </span>                    
                            </li> 
                            <li>
                                <input type='submit' name='' value='Create flower'></input>               
                            </li> 
                        </ul>
                    </form>
                </div>
                <script src='/js/new.js'></script>
            </body>
            </html>
        );
    }
}


module.exports = New;