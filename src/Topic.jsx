import React from 'react';

const Topic = props => {
    const {id, title, description, additionalSource, complete, creationDate, completionDate} = props.tiedot;
    return <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{additionalSource}</td>
        <td>{complete}</td>
        <td>{creationDate}</td>
        <td>{completionDate}</td>
    </tr>;

};
export default Topic;