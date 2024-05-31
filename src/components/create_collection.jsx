import { Alert, Button, Container, Form } from "react-bootstrap";
import React, { useState } from "react";
import MarkdownEditor from '../components/markdown';
import {  useNavigate } from "react-router-dom";

export default function CreateCollection() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("0");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [fields, setFields] = useState([
        { name: "", value: "" },
        { name: "", value: "" },
        { name: "", value: "" }
    ]);
    const createDate = new Date().toLocaleDateString();

    const handleFieldChange = (index, field, value) => {
        const updatedFields = [...fields];
        updatedFields[index][field] = value;
        setFields(updatedFields);
    };
   
    const handleSubmit = async (event) => {
        event.preventDefault();

        const collectionData = {
            title: title,
            category: category,
            description: description,
            fields: fields, 
            userId: localStorage.getItem('id'),
            date: createDate
        };
       const collectionName = collectionData.userId +'|' + title;
        try {
            const response = await fetch('https://testt-zumv.onrender.com/api/collections/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(collectionData),
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Collection created successfully:', result);
                localStorage.setItem('fields', JSON.stringify(collectionData.fields));
                localStorage.setItem('collectionName', collectionName );
                navigate('/cabinet/collection/create_items');
            } else {
                const error = await response.json();
                console.error('Error creating collection:', error.message);
                setError(error.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        }
    };

    return (
        <Container className="input_container">
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    className="form_option"
                    type="text"
                    id="inputTitle"
                    aria-describedby="inputTitleBlock"
                    placeholder='Enter new collection name'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label> Choose category</label>
                <Form.Select className="form_option mt-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option defaultValue value="0"> Select category </option>
                    <option value="Books">Books</option>
                    <option value="Films">Films</option>
                    <option value="Baseball Cards">Baseball Cards</option>
                    <option value="Albums">Albums</option>
                    <option value="Others">Others</option>
                </Form.Select>
                <MarkdownEditor value={description} onChange={setDescription}/>                
                {fields.map((field, index) => (
                    <div key={index} className="field_container">
                        <Form.Control
                            className="form_option"
                            type="text"
                            placeholder={`Enter title for Field ${index + 1}`}
                            value={field.name}
                            onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                        />
                        <Form.Select
                            className="form_option option_drop"
                            value={field.value}
                            onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                        >
                            <option value=""> not selected </option>
                            <option value="Number">Number</option>
                            <option value="Checkbox">Checkbox</option>
                            <option value="Textarea">Textarea</option>
                            <option value="Long_description">Long description </option>
                            <option value="Date">Date</option>
                        </Form.Select>
                    </div>
                ))}
                {error && <Alert>{error}</Alert>}
                <Button type="submit" className="submit_button"> Create collection </Button>
            </Form>
        </Container>
    );
}