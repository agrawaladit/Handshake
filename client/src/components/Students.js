import React, { Component } from 'react'
import { getUsers } from './UserFunctions'
import handshake from '../handshake.png'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {get_users} from '../actions/actions'

class Students extends Component {

    state = {
        s_name: '',
        c_name: '',
        major: ''
    }

    updateSearch = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        getUsers().then(response => {
            this.props.get_users(response)
            this.setState({
                s_name: '',
                c_name: '',
                major: ''
            })
            
        })
            .catch(error => {
                console.log(error)
                return {
                    users: ['no data']
                }
            })
    }


    render() {

        try {
            const users = this.props.users.filter(user => {
                var name = user.first_name + ' ' + user.last_name
                return (
                    (user.education.major.toLowerCase().indexOf(this.state.major.toLowerCase()) !== -1) &&
                    (user.school.toLowerCase().indexOf(this.state.c_name.toLowerCase()) !== -1) &&
                    (name.toLowerCase().indexOf(this.state.s_name.toLowerCase()) !== -1))
            })
            var userCards = users.map(user => {
                return (
                    <Card className="pad-all">
                        <Row>
                            <Col xs={2}>
                                <Card.Img variant="top" src={handshake} style={{ height: '100px', width: '100px' }} />
                            </Col>
                            <Col xs={8} className='pad-all'>
                                <Card.Title>{[user.first_name + ' ' + user.last_name]}</Card.Title>
                                <Card.Subtitle className="mb-2">{user.school}</Card.Subtitle><br />
                                <Card.Subtitle className="mb-2 text-muted">Major: {user.education.major}</Card.Subtitle>
                            </Col>
                            <Col xs={2}>
                                <Link to="/profile" className="nav-link">
                                    <Button variant="primary" >Go to Profile</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card>
                )
            })
        }
        catch (err) {
            console.log(err);
        }

        return (
            <Container >
                <Card className='mar-btm'>
                    <div class="pad-all">
                        <nav class="navbar navbar-light bg-light">
                            <form class="form-inline col-md-4">
                                <input class="form-control w-100" type="search" placeholder="Student Name" value={this.state.s_name} onChange={this.updateSearch} name="s_name" />
                            </form>
                            <form class="form-inline col-md-4">
                                <input class="form-control w-100" type="search" placeholder="School Name" value={this.state.c_name} onChange={this.updateSearch} name="c_name" />
                            </form>
                            <form class="form-inline col-md-4">
                                <input class="form-control w-100" type="search" placeholder="Major" value={this.state.major} onChange={this.updateSearch} name="major" />
                            </form>
                        </nav>
                    </div>
                </Card>
                <Card>
                    {userCards}
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.studentsReducer.users
})

export default connect(mapStateToProps,{get_users})(Students)