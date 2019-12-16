import React from 'react';
import ProjectItem from "./Project/ProjectItem";


const Dashboard = (props) => (
    <div>
        <h1 className="alert alert-warning">Welcome to the Dashboard</h1>
        <ProjectItem/>
    </div>
);

export default Dashboard;
