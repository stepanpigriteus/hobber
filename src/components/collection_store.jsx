import { Container } from "react-bootstrap";
import Collection from "./collection_card";
import { useEffect, useState } from "react";
import { handleDelete } from "../scripts/scripts";

export default function CollectionStore() {
    const [userCollections, setUserCollections] = useState([]);

    handleDelete();
    

    useEffect(() => {
            fetch('https://testt-zumv.onrender.com/get_user_collection_all')
                .then(response => response.json())
                .then(data => {
                    setUserCollections(data)
                })
                .catch(error => console.error('Ошибка:', error));
             
    }, []);
    
    
    return (
        <Container className="item_store">
        {userCollections.map((collection, index) => (
            <Collection key={index} {...collection} onClick={handleDelete}/>
        ))}
        </Container>
    );
}