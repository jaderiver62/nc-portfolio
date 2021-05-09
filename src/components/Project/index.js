import React from 'react';
import {
    Card, CardImg, CardText,
    CardTitle, CardSubtitle, CardLink, Col
} from 'reactstrap';

function Project(props) {
    const { img, name, caption, description, github, link } = props;
    return (
        <Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
            <CardImg top width="100%" src={img} alt={name} />
            <Card body className="card-style">
                <CardTitle tag="h4">{name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{caption}</CardSubtitle>
                <CardText>{description}</CardText>
                <CardLink href={link} target="_blank" rel="noreferrer noopener">Visit Site</CardLink>
                <br />
                <CardLink href={github} target="_blank" rel="noreferrer noopener">GitHub</CardLink>
            </Card>
        </Col>
    )
}

export default Project;