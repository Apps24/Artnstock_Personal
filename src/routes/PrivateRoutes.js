import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
    const userType = useSelector((state) => state.userReg);

    return(
        userType.userType === "customer" || userType.userType === "contributor" ? <Outlet/> : <Navigate to="/join"/>
    )
}

export default PrivateRoutes