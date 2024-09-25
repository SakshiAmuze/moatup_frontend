import React from 'react';

export default function Header1Operations({ Icon, title, to }) {
    return (
        <div className="header1_options">
           {Icon && <Icon />} 
            <span>{title}</span>
        </div>
    );
}





