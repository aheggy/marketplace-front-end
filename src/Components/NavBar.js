import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <nav>
            <h1>
                <Link to="/">Home</Link>
            </h1>
            <h1>
                <Link to="/products">Products</Link>
            </h1>
            <button>
                <Link to="products/new">Login</Link>
            </button>
        </nav>
    )
}