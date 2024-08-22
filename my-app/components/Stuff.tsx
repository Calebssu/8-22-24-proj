import Card from 'react-bootstrap/Card';

function Stuff(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} width="400px" />
                <Card.Body>
                    <Card.Title style={{ color: 'white', fontWeight: '500'}}>{props.name}</Card.Title>
                    <Card.Text style={{ color: 'white', fontWeight: '300' }}>
                        {props.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Stuff;