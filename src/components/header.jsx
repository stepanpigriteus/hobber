import { Container, Navbar, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import '../custom.css';
import { Box2HeartFill } from 'react-bootstrap-icons';
import HelloUser from './hello';
import ButtonType from './button_type';
import { handleLogout } from '../scripts/scripts';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';
import { useEffect, useState } from 'react';

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const currentLanguage = i18n.language || 'en';
    setLanguage(currentLanguage);
  }, []);

  return (
    <>
      <Navbar bg='body-tertiary' expand="md" fixed="top" className='nav_super'>
        <Container className='nav_container' >
          <Navbar.Brand href="/" className="header_logo">
            <Box2HeartFill size={34} className="header_icon" />
            <span>{t('brandName')}</span>
          </Navbar.Brand>
          <Container className='navbar'>
            <Form className="d-flex search">
              <Form.Control
                type="search"
                placeholder={t('searchPlaceholder')}
                className="me-2 search_field"
                aria-label="Search"
              />
              <Button variant="outline-success" className='button'>
                {t('searchButton')}
              </Button>
            </Form>
          
          </Container>
          <Container className='button_container'>
          {localStorage.getItem('jwt_token') ? <HelloUser onClick={handleLogout} /> : <ButtonType />}
          <DropdownButton
                    id="dropdown-basic-button"
                    variant='dark'
                    title={t('language')}
                    onSelect={(e) => changeLanguage(e)}
                    className='button'
                >
                    <Dropdown.Item eventKey="en">English</Dropdown.Item>
                    <Dropdown.Item eventKey="kk">Қазақша</Dropdown.Item>
                    <Dropdown.Item eventKey="ru">Русский</Dropdown.Item>
                </DropdownButton>
            </Container>
        </Container>
      </Navbar>
    </>
  );
}