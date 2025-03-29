import React from 'react'

function List({ list, className }) {
    return (
        <ul>
            {list?.map((item, index) => (
                <li
                    key={index}
                    className={`text-gray-700 ml-4 list-disc leading-relaxed my-4 ${className}`}
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default List