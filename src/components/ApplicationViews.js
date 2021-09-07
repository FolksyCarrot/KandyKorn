import React from "react";
import { Route } from "react-router-dom";
import { Products } from "./Products/Products";
import { Locations } from "./StoreLocations/Locations";
import { EmployeeForm } from "./Employee/EmployeeForm";
import { EmployeesList } from "./Employee/Employees";
import { CustomerList} from './customers/Customers'
import { CustomerForm } from "./customers/CustomerForm";
import { CustomerOrders } from "./orders/Orders";

export const ApplicationViews = () => {

    return (
        <>
            <Route path="/products">
                <Products />
            </Route>

            <Route path="/Locations">
                <Locations />
            </Route>

            <Route path="/employees">
                <EmployeesList />
            </Route>

            <Route exact path="/employeeForm">
                <EmployeeForm />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/customersForm">
                <CustomerForm />
            </Route>

            <Route path="/customersOrders">
                <CustomerOrders />
            </Route>
        
        
        </>
    )

}