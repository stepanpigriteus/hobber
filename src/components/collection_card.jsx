import { Card, Button } from "react-bootstrap";
import { PlusCircle, Trash3Fill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import RenderMarkdown from "./markdown_render";

export default function Collection(props) {
    const navigate = useNavigate();
    let userId = localStorage.getItem('id');
    
    const description = props.firstDocument && props.firstDocument.description ? 
    (props.firstDocument.description.length > 56 ? 
        props.firstDocument.description.substring(0, 53) + '...' : 
        props.firstDocument.description
    ) : '';
    
    function handleClick() { 
        localStorage.setItem('collectionName', props.collectionName);
        localStorage.setItem('fields', JSON.stringify(props.firstDocument.fields));
        navigate('/cabinet/collection');
    }

    const collectionName = props.collectionName.split('|')[1];
    let itemsCount;
    props.totalDocuments > 1 ? itemsCount = "Size: " + props.totalDocuments: itemsCount = 'Empty collection';
    const createDate = props.firstDocument && props.firstDocument.date ? props.firstDocument.date : 'Unknown';
    const owner = props.collectionName.split('|')[0];

    return(
        <>
           <Card className="item_card" style={{ width: '16rem' }} owner={owner}>
                <Card.Body className="d-flex flex-column card_body">
                    <Card.Title className="h6">{collectionName}</Card.Title>
                    <Card.Text> {itemsCount} </Card.Text>
                    <RenderMarkdown content={description} />
                    <Card.Text> Create: {createDate} </Card.Text>
                    <div className="mt-auto">
                    <Button onClick={handleClick} variant="primary"> See items</Button>
                    {owner === userId && (
                        <>
                        <Button variant="dark" className="m-2">
                            <PlusCircle />
                        </Button>
                        <Button id={'sdf'} variant="danger" className="m-0.5">
                            <Trash3Fill />
                        </Button>
                        </>
                    )}
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
