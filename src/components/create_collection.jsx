import { Alert, Button, Container, Form } from "react-bootstrap";
import React, { useState } from "react";
import MarkdownEditor from '../components/markdown';
import {  useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function CreateCollection() {
    const { t } = useTranslation();
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
                navigate('/cabinet/collection/');
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
                    className="form_option form_field_color"
                    type="text"
                    id="inputTitle"
                    aria-describedby="inputTitleBlock"
                    placeholder={t('collectionName')}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label> {t('collectionCategory')}</label>
                <Form.Select className="form_option mt-2 form_field_color" value={category}  onChange={(e) => setCategory(e.target.value)}>
                    <option defaultValue value="0"> {t('categorySet')} </option>
                    <option value="Books">{t('firstFieldOption')}</option>
                    <option value="Films">{t('secondFieldOption')}</option>
                    <option value="Baseball Cards">{t('thirdFieldOption')}</option>
                    <option value="Albums">{t('fourFieldOption')}</option>
                    <option value="Others">{t('fiveFieldOption')}</option>
                </Form.Select>
                <MarkdownEditor value={description} onChange={setDescription} />                
                {fields.map((field, index) => (
                    <div key={index} className="field_container ">
                        <Form.Control
                            className="form_option form_field_color"
                            type="text"
                            placeholder={`${t('fieldTitle')} ${index + 1}`}
                            value={field.name}
                            onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                        />
                        <Form.Select
                            className="form_option option_drop form_field_color"
                            value={field.value}
                            onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                        >
                            <option value=""> {t('setField')} </option>
                            <option value="Number">{t('firstFieldType')}</option>
                            <option value="Checkbox">{t('secondFieldType')}</option>
                            <option value="Textarea">{t('thirdFieldType')}</option>
                            <option value="Long_description">{t('fourFieldType')} </option>
                            <option value="Date">{t('fiveFieldType')}</option>
                        </Form.Select>
                    </div>
                ))}
                {error && <Alert>{error}</Alert>}
                <Button type="submit" className="submit_button"> {t('createButton')} </Button>
            </Form>
        </Container>
    );
}