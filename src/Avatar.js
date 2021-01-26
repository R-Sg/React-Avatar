import React from 'react'
import { Card } from 'react-bootstrap'
import './Avatar.css'

const AvatarCard = (props) => {

    return (
        <div className="avatarstyle" display="inline-block">
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={`https://joeschmoe.io/api/v1/${props.name}`} />
                <Card.Body>
                    <center>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.position}</Card.Text>
                    </center>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AvatarCard;