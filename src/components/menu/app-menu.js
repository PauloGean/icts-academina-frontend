import { Link } from "react-router-dom";

function AppMenu() {
    return (
        <>
            <nav>
                <Link to="/" >
                    Academia
                </Link>
                <ul>
                    <li>
                        <Link to="/curso" >
                            Curso
                        </Link> 
                    </li>
                    <li>
                       <Link to="/cliente" >
                             Cliente
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default AppMenu;