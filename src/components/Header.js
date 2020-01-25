import React from 'react'
import Card from 'react-bootstrap/Card'
import image from './header.jpg'


const Header = () => {
    return (
        <Card className="header">
            <Card.Img src={image} alt="farmimage"></Card.Img>
            <Card.ImgOverlay>
                <Card.Title style={{fontSize: 40}} className="headertitle">Ylämaan tila</Card.Title>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Header