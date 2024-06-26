import { Container } from "react-bootstrap";
import Collection from "./collection_card";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

export default function CabinetCollectionStore() {
    const { t } = useTranslation();
    const [userCollections, setUserCollections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                    setUserCollections(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    setIsLoading(false);
                });
        } else {
            console.error('ID пользователя не найден в localStorage');
            setIsLoading(false);
        }
    }, []);

    return (
        <Container className="item_store">
            {isLoading ? (
                <p>{t('loading')}</p>
            ) : userCollections.length === 0 ? (
                <p>{t('collectionPlaceholder')}</p>
            ) : (
                userCollections.map((collection, index) => (
                    <Collection key={index} {...collection} />
                ))
            )}
        </Container>
    );
}