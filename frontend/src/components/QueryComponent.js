import React from 'react'
import APIService from '../services/APIService'

export default class QueryComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            queries: []
        }
    }

    componentDidMount(){
        APIService.getQueries().then((data) => {
            this.setState({ queries: data.data._embedded.queries })
            console.log(this.state.queries)
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Query Details</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Published</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.queries.map(query =>
                            <tr key={query._links.self.href}>
                                <td>{query.title}</td>
                                <td>{query.description}</td>
                                <td>{String(query.published)}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

