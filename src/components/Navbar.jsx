import { Link } from 'react-router-dom'
const Navebar=()=>{
    return (
        <nav className="navbar">    
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/counter">Counter</Link>
        </nav>
    )
}
export default Navebar