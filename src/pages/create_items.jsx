import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import CreateItem from '../components/create_item';


function CreateItems() {
    const [schema, setSchema] = useState(null);


    return (
        <>
        <Header/>
        <CreateItem/>
        </>
    );
}

export default CreateItems;