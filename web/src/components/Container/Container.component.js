import React from 'react';
import './Container.style.css';

export function ContainerColumn({ children, style }) {
    return (
        <div className="container-column" style={style}>
            {children}
        </div>
    )
}

export function Container({ children, style }) {
    return (
        <div className="container" style={style}>
            {children}
        </div>
    )
}
