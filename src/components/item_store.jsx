import { Container, Table } from "react-bootstrap";

export default function ItemStore() {
    
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
          {/* <tbody>
           {fakeUsers.map((el, i) => <Line key = {el.id} name={el.name} id= {el.id} number={1 + i} address={el.address} phone={el.phone}/>)}
          </tbody> */}
        </Table>
        </Container>
    );
}