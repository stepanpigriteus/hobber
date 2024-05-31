import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CreateItem() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({});
    const [error, setError] = useState("");

    const fields = JSON.parse(localStorage.getItem('fields')) || [];
    let id = localStorage.getItem('id');
    let collName = localStorage.getItem('collectionName').split('|')[1];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        formData.collectName = localStorage.getItem('collectionName');
        console.log(formData);
        try {
            const response = await fetch('https://testt-zumv.onrender.com/api/collections/create_item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                
                navigate('/cabinet/collection');
            }
            const result = await response.json();
                console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const renderField = (field) => {
        switch (field.value) {
            case 'Number':
                return (
                    <Form.Group key={field._id} controlId={field._id}>
                        <Form.Label>{field.name}</Form.Label>
                        <Form.Control
                            type="number"
                            name={field.name}
                            placeholder={`This is a number field`}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                );
            case 'Textarea':
                return (
                    <Form.Group key={field._id} controlId={field._id} className='mt-4'>
                        <Form.Label>{field.name}</Form.Label>
                        <Form.Control
                            type="text"
                            name={field.name}
                            placeholder={`Enter ${field.name}`}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                );
            case 'Checkbox':
                return (
                    <Row className='form_row' key={field._id}>
                        <Col className='mt-4' xs={1} md={1} lg={1} xl={1}>
                            <Form.Check
                                type="checkbox"
                                name={field.name}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col className='form_label_col'>
                            <Form.Label className='m-0 mt-4'>{field.name}</Form.Label>
                        </Col>
                    </Row>
                );
            case 'Date':
                return (
                    <Form.Group key={field._id} controlId={field._id} className='mt-4'>
                        <Form.Label>{field.name}</Form.Label>
                        <Form.Control
                            type="date"
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                );
            case 'Long_description':
                return (
                    <Form.Group key={field._id} controlId={field._id} className='mt-4'>
                        <Form.Label>{field.name}</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name={field.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                );
            default:
                return null;
        }
    };

    return (
        <Container className='item_generator'>
            <Card.Title className='item_generator_title'>
                Create new item in "{collName}"
            </Card.Title>
            <Form onSubmit={handleSubmit}>
        
                {fields.map(field => renderField(field))}
                <Container className='form_button_container'>
                    <Button type="submit" className='mt-4'>Create item</Button>
                </Container>
            </Form>
        </Container>
    );
}