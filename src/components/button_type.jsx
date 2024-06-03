import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Switch from "./switcher";
import { useTranslation } from 'react-i18next';

export default function ButtonType() {
    const { t } = useTranslation();

    return(
        <>
        <Container className='button_container'>
            <Switch/>
            <Link to = "/login">
                <Button className="button" variant="dark"> {t('signIn')}</Button>
            </Link>
            <Link to = "/register">
                <Button className="button" variant="dark"> {t('register')} </Button>
            </Link>
        </Container>
        </>
    );
}