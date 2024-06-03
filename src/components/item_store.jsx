import { Container, Table } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

export default function ItemStore() {
  const { t } = useTranslation();
    
    return(
        <Container>
        <Table className = 'user_table' bordered hover>
          <thead className='table-secondary '>
            <tr>
              <th>№</th>
              <th>Id</th>
              <th>Name</th>
              <th>Adress</th>
              <th>Number</th>
            </tr>
          </thead>
        </Table>
        </Container>
    );
}