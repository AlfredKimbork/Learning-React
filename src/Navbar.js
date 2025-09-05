import './css/navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a className="create" href="/create">New Blog</a></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;