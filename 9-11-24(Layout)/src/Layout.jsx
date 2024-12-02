
import { Link , Outlet } from "react-router-dom";

const Layout=()=>{
    return (
        <>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>


            <Outlet/>

            <hr size="4" color="red"/>
            www.ayushi.com
            
        </>
    )

}
export default Layout;