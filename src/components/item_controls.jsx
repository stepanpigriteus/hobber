import { Button } from "react-bootstrap";
import { PlusCircle, Trash3Fill } from "react-bootstrap-icons";

export default function ItemControlsDelete({ itemId, onDelete }) {
    return(
        <>
        <Button id={'sdf'} variant="danger" className="m-1 p-0" onClick={() => onDelete(itemId)}>
            <Trash3Fill  className='h5 m-1 p-0'/>
        </Button>
        </>
    );
}