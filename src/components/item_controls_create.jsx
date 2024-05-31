import { Button } from "react-bootstrap";
import { PlusCircle} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function ItemControlsCreate() {
    const navigate = useNavigate();

    const handleCreate = () => {
        navigate('/cabinet/collection/create_items');
    };
    return(
        <>
        <Button variant="dark" className="m-2 p-0" onClick={handleCreate}>
            <PlusCircle className="h5 m-1 p-0"/>
        </Button>
        </>
    );
}