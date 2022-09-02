import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/register');
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <Link to="/login">Go to the Login page</Link>
            <br />
            <Link to="/register">Go to the Register page</Link>
            <br />
            
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home