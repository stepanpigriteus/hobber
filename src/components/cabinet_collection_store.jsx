import { Container } from "react-bootstrap";
import Collection from "./collection_card";
import { useState,useEffect } from "react";



export default function CabinetCollectionStore() {
    const [userCollections, setUserCollections] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('id');
        if (userId) {
            fetch('https://testt-zumv.onrender.com/get_user_collection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: userId }),
            })
                .then(response => response.json())
                .then(data => {
                    setUserCollections(data)
                })
                .catch(error => console.error('Ошибка:', error));
        } else {
            console.error('ID пользователя не найден в localStorage');
        }
    }, []);
    
    return (
        <Container className="item_store">
        {userCollections.map(collection => (
            <Collection {...collection}/>
        ))}
        </Container>
    );
}