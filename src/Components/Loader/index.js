import React from 'react';
import ReactDom from 'react-dom';
import './loader.css';

export default function  Loader() {
  return (ReactDom.createPortal(
    <div className="loader"/>,
    document.getElementById('portal')
  )
    
  )
}
