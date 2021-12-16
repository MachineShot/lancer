import React from 'react'
import APIService from '../services/APIService'

export default class UserComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        APIService.getUsers().then((data) => {
            this.setState({ users: data.data._embedded.users })
            console.log(this.state.users)
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Enabled</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(user =>
                            <tr key={user._links.self.href}>
                                <td>{user.username}</td>
                                <td>{String(user.enabled)}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

