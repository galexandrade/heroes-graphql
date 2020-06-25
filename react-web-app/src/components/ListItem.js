import React from 'react';

const ListItem = ({ name, photo }) => (
    <div className="list-item">
        <div>
            <img
                src={photo}
                alt={`${name}'s picture`}
                className="profile-picture"
            />
        </div>
        <p>{name}</p>
    </div>
);

export default ListItem;
