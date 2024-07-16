import { Link,Outlet } from "react-router-dom";

const About=()=>{
    return(
        <>
        <h1>This is about page new</h1>
        <h2>wellcome to about page</h2>
        <Link to="student">Student</Link>
        <Link to="Middledata">Middledata</Link>
        <hr size="4" color="yellow"/>
        <Outlet/>
        <hr size="4" color="yellow"/>
        www.mycompany.com all right reservrd, 2024
        
        </>
    )
}
export default About;