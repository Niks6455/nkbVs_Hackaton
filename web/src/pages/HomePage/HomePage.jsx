import { useContext } from "react";
import DataContext from "../../context";
import Layout from "../../components/Layout/Layout";
import { Outlet } from "react-router-dom";

function PageGlobal() {
    const context = useContext(DataContext);
    console.log("context", context)

    return ( 
        <div>    
            <Outlet/>
        </div>
     );
}

export default PageGlobal;