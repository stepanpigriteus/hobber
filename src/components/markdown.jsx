import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import MarkdownIt from 'markdown-it';
import { Container } from 'react-bootstrap';

const md = new MarkdownIt();

export default  function MarkdownEditor({ value, onChange }) {
  return (
    <>
      <Container className='p-0 markdown form_field_color'>
        <ReactQuill
          value={value}
          onChange={onChange}
          modules={MarkdownEditor.modules}
          formats={MarkdownEditor.formats}
          theme="snow"
          placeholder="Введите текст с поддержкой Markdown"
        />
      </Container>
    </>
  );
}


MarkdownEditor.modules = {
  toolbar: [
    [{ 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'align': [] }],
    [{ 'color': [] }, { 'background': [] }],
    ['link'],
    ['clean']
  ]
};

MarkdownEditor.formats = [
  'font', 'list', 'bullet',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'align', 'color', 'background', 'link'
];