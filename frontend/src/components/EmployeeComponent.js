import React from 'react'
import APIService from '../services/APIService'

export default class EmployeeComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            firstName: '',
            lastName: '',
            description: ''
        };

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        APIService.getEmployees().then((data) => {
            this.setState({ employees: data.data._embedded.employees })
            console.log(this.state.employees)
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });
    }

    create(e) {
        // add entity - POST
        e.preventDefault();
    }
    update(e) {
        // update entity - PUT
        e.preventDefault();
    }
    delete(e) {
        // delete entity - DELETE
        e.preventDefault();
    }
    handleChange(changeObject) {
        this.setState(changeObject)
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="display-4 text-center">Make An API Call in React</h1>
                        <form className="d-flex flex-column">
                            <legend className="text-center">Add-Update-Delete Friend</legend>
                            <label htmlFor="name">
                                Friend Name:
                                <input
                                    name="name"
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({ name: e.target.value })}
                                    required
                                />
                            </label>
                            <label htmlFor="notes">
                                Friend notes:
                                <input
                                    name="notes"
                                    id="notes"
                                    type="test"
                                    className="form-control"
                                    value={this.state.notes}
                                    onChange={(e) => this.handleChange({ notes: e.target.value })}
                                    required
                                />
                            </label>
                            <label htmlFor="id">
                                Friend ID:
                                <input
                                    name="id"
                                    id="id"
                                    type="text"
                                    className="form-control"
                                    value={this.state.id}
                                    onChange={(e) => this.handleChange({ id: e.target.value })}
                                />
                            </label>
                            <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                                Add
                            </button>
                            <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                                Update
                            </button>
                            <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <h2 className="text-center">Employee Details</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map(employee =>
                            <tr key={employee._links.self.href}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.description}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

