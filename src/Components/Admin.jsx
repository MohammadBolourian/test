import MainLayout from "./Dashboard/Layout/MainLayout";
import {Product, Read, Update , HomePage} from "./index";
import {Route, Routes} from "react-router-dom";
import CreateProduct from "./Dashboard/Product/CreateProduct";
import EditProduct from "./Dashboard/Product/EditProduct";
import Users from "./Dashboard/User/Users";
import EditUser from "./Dashboard/User/EditUser";
import {Categories} from "./Nobati/Pages/Categories";
import EmployeeShow from "./Nobati/Pages/EmployeeShow";
import Booking from "./Nobati/Pages/Booking";

const Admin = () => {
    return (

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category" element={<Categories/>}/>
                <Route path="/show" element={<EmployeeShow/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/dashboard" element={<MainLayout/>} >
                    <Route path="home" element={<Read />} />
                    <Route path="update" element={<Update/>}/>
                    <Route path="products" element={<Product/>}/>
                    <Route path="products/create" element={<CreateProduct/>}/>
                    <Route path="products/edit" element={<EditProduct/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="users/edit" element={<EditUser/>}/>
                </Route>
            </Routes>

    )
}
export default Admin;