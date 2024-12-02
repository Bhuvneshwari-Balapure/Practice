import { Link , Outlet } from "react-router-dom";
const About =()=>{
    return (
        <>
            <div className="about">
            <h3>Wellcome to About Page</h3>
            <div className="AboutPages">
                <div className="aboutleft">
                    <ul>
                        <li><Link to="Aboutcompany">About Company</Link></li>
                        <li><Link to="AboutServices">About Services</Link></li>
                        <li><Link to="AboutProduct">About Products</Link></li>
                    </ul>
                    
                    
                    

                </div>
                <div className="aboutright">

                    <Outlet/>
                    
                </div>

            </div>


            </div>

        </>
    )
}
export default About;