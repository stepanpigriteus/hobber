import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Switch from "./switcher";


export default function ButtonType() {
    return(
        <>
        <Container className='button_container'>
            <Switch/>
            <Link to = "/login">
                <Button className="button" variant="dark"> Sign In</Button>
            </Link>
            <Link to = "/register">
                <Button className="button" variant="dark"> Register </Button>
            </Link>
        </Container>
        </>
    );
}