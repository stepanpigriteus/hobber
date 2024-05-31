import { Navbar } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useLocation } from 'react-router-dom';

export default  function BreadcrumbExample() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (

        <Breadcrumb className='breadcrump'>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                Home
            </Breadcrumb.Item>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return (
                <Breadcrumb.Item key={to} linkAs={Link} linkProps={{ to }}>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>

  );
}
