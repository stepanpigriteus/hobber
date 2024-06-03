import React, { useState, useEffect} from 'react';
import { ButtonToolbar, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemControlsCreate from './item_controls_create';
import ItemControlsDelete from './item_controls';

export default function ItemTable() {
  const [userData, setData] = useState([]);
  const [error, setError] = useState("");
  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([]);
  let colName = localStorage.getItem("collectionName");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://testt-zumv.onrender.com/get_user_collection_item', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({collectionName: colName}),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('Collection retrieved successfully:', result);
          setData(result.data.slice(1));
          if (result.data.length > 0) {
            const firstItemFields = result.data[0].fields;
            const filteredColumns = firstItemFields.map(field => field.name);
            console.log(filteredColumns);
            setColumns(filteredColumns);
          }
        } else {
          const error = await response.json();
          console.error('Error retrieving collection:', error.message);
          setError(error.message);
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      }
    };
  
    if (colName) {
      fetchData();
    }
  }, [colName]);

  const handleDelete = async (itemId) => {
    const colName = localStorage.getItem('collectionName');
    try {
      const response = await fetch('https://testt-zumv.onrender.com/api/collections/delete_item', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ collectionName: colName, itemId }),
       
      });

      if (response.ok) {
        const result = await response.json();
        const updatedData = userData.filter(item => item.itemId !== itemId);
        setData(updatedData);
        console.log(result)
      } else {
        const error = await response.json();
        console.error('Error deleting item:', error.message);
        setError(error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };
  

  return (
    <Container className='container'>
          {userData.length === 0 ? (
            <>
            <p className='alert_item_table'>Collection is empty...create new!</p>
              <ItemControlsCreate/>
            </>
          ) : (
            <Table bordered hover className='item_table'>
              <thead>
                <tr>
                  <th>Id</th>
                  {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                  <th>
                  <ItemControlsCreate/>
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.map((item, index) => (
                  <tr key={index}>
                    <td >{item.itemId}</td>
                    {columns.map((column, columnIndex) => (
                      <td key={columnIndex}>
                        {typeof item[column] === 'boolean' ? item[column].toString() : item[column]}
                      </td>
                    ))}
                    <td>
                      <ItemControlsDelete itemId={item.itemId} onDelete={handleDelete} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
    </Container>
  );
}
