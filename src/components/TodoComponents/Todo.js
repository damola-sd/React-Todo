import React from 'react';

export default function Todo ({item}) {
    return (
        <div>
            <div key={item.id}>
            {item.task}
            </div>
        </div>
    )
}