import React from 'react';

import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import './style.css';

export default function Home() {
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    );
}
