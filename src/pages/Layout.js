import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/secondary">Secondary</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />

            <footer>
                <p>&copy; 2025</p>
            </footer>
        </>
    )
};

export default Layout;