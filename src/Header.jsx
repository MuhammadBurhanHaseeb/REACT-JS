import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function header(){
    return (
        <header>
            <h1>My React App</h1>
            <img src={reactLogo} alt="React Logo" />
            <img src={viteLogo} alt="Vite Logo" />
            <nav>
                <ul>
                    <li> <a href="#">Home</a>  </li>
                    <li> <a href="#">About</a> </li>
                    <li> <a href="#">Contact</a> </li>
                </ul>
            </nav>
            <hr/>     

        </header>  
    );
}

export default header