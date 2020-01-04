import React from 'react'
import {useTeamsQuery} from '../../generated/apollo-components'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const Teams = () => {
    const {data, loading, error} = useTeamsQuery()

    if (loading) return 'Loading...'
    if (error) return 'Error...'

    return(
        <Accordion defaultActiveKey="0">
            {data.teams.map(team => ( 
                <Card>
                    <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={team.id}>
                                {team.name} ({team.abbrev})
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={team.id}>
                        <Card.Body>
                            id: {team.id}<br/>
                            Region: {team.region} <br/>
                            City: {team.city} <br/>
                            State: {team.state} <br/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
        // <ListGroup>
        //     {data.teams.map(team => (
        //         <Link key={team.id} to={`/teams/${team.id}`}>
        //             <ListGroup.Item key={team.id}>{team.name}</ListGroup.Item>
        //         </Link>
        //     ))}
        // </ListGroup>
        
    )
}

export default Teams