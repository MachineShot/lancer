import React from 'react'
import APIService from '../services/APIService'

export default class QueryComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            ratings: []
        }
    }

    componentDidMount(){
        APIService.getRatings().then((data) => {
            this.setState({ ratings: data.data._embedded.ratings })
            console.log(this.state.ratings)
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Rating Details</h2>
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
                        this.state.ratings.map(rating =>
                            <tr key={rating._links.self.href}>
                                <td>{rating.comment}</td>
                                <td>{rating.stars}</td>
                                <td>{rating.fk_Employeeid}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

