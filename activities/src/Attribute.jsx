import React from 'react';
export default function Attribute() {
    const linkdata = {title: "Facebook", url: `https://www.facebook.com`};
    return (
        <a href={linkdata.url} target="_blank"> {linkdata.title} </a>
    );
}