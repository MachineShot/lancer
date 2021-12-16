import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddEmployee from "./components/add-employee.component";
import Employee from "./components/employee.component";
import EmployeesList from "./components/employees-list.component";
import Register from "./components/register.component";
import Login from "./components/login.component";

// https://www.javaguides.net/2020/07/react-js-fetch-api-to-consume-spring.html
// https://www.bezkoder.com/react-crud-web-api/

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/" className="navbar-brand">
                        Lancer
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/employees"} className="nav-link">
                                Employees
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Add
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/modal"} className="nav-link">
                                modal
                            </Link>
                        </li>
                    </div>
                    <a href="/" className="navbar-brand">
                        {JSON.parse(localStorage.user)}
                    </a>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route exact path={["/", "/employees"]} component={EmployeesList} />
                        <Route exact path="/add" component={AddEmployee} />
                        <Route path="/employees/:id" component={Employee} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;

