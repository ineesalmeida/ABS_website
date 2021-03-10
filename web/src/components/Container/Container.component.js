import React from 'react';
import './Container.style.css';

export function ContainerColumn({ children }) {
    return (
        <div className="container-column">
            {children}
        </div>
    )
}

export function Container({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    )
}
