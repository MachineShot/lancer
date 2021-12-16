import React, { Component } from "react";
import EmployeeDataService from "../services/employee.service";
import { Link } from "react-router-dom";

export default class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.retrieveEmployees = this.retrieveEmployees.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveEmployee = this.setActiveEmployee.bind(this);

        this.state = {
            employees: [],
            currentEmployee: null,
            currentIndex: -1
        };
    }

    componentDidMount() {
        this.retrieveEmployees();
    }

    retrieveEmployees() {
        EmployeeDataService.getAll()
            .then(response => {
                this.setState({
                    employees: response.data._embedded.employees
                });
                console.log(response.data._embedded.employees);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveEmployees();
        this.setState({
            currentEmployee: null,
            currentIndex: -1
        });
    }

    setActiveEmployee(employee, index) {
        this.setState({
            currentEmployee: employee,
            currentIndex: index
        });
    }

    render() {
        const { employees, currentEmployee, currentIndex } = this.state;
        return (
            <div className="list row">
                <div className="col-md-6">
                    <h4>Employees List</h4>

                    <ul className="list-group">
                        {employees &&
                        employees.map((employee, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveEmployee(employee, index)}
                                key={index}
                            >
                                {employee.firstName}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentEmployee ? (
                        <div>
                            <h4>Employee</h4>
                            <div>
                                <label>
                                    <strong>First name:</strong>
                                </label>{" "}
                                {currentEmployee.firstName}
                            </div>
                            <div>
                                <label>
                                    <strong>Last Name:</strong>
                                </label>{" "}
                                {currentEmployee.lastName}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentEmployee.description}
                            </div>

                            <Link
                                to={"/employees/" + currentEmployee.id}
                                className="btn btn-outline-secondary"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on an Employee...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
