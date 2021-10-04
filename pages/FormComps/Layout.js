import Container from "./container";
import NavbarForm from "./NavbarForm";

const Layout = ({ children}) => {
    return ( 
    <div className="content">
<NavbarForm />
{children}
<Container />
    </div>
     );
}
 
export default Layout;