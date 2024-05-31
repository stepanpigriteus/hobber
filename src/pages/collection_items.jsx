import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import ItemTable from '../components/item_table';



export default function CollectionItems() {
    const [ schema, setSchema] = useState(null);
     

    return (
        <>
        <Header/>
        <ItemTable/>
        </>
    );
}
