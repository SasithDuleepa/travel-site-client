import React, { useState } from 'react';
import './adminPanelMainComponent.css';

export default function AdminPanelMainComponent(props) {
    const [currentComponent, setCurrentComponent] = useState(props.component1);

    const handleComponentChange = (component) => {
        setCurrentComponent(component);
    };

    return (
        <div className='AdminPanelMainComponent'>
            <div className='AdminPanelMainComponent-nav'>
                <button className={currentComponent === props.component1 ? 'AdminPanelMainComponent-nav-btn-active' : 'AdminPanelMainComponent-nav-btn-deactive'} onClick={() => handleComponentChange(props.component1)}>
                    {props.component1BtnName}
                </button>
                <button className={currentComponent === props.component2 ? 'AdminPanelMainComponent-nav-btn-active' : 'AdminPanelMainComponent-nav-btn-deactive'} onClick={() => handleComponentChange(props.component2)}>
                    {props.component2BtnName}
                </button>
            </div>
            <div className='AdminPanelMainComponent-component'>
                {currentComponent}
            </div>
        </div>
    );
}