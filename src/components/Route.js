import React from 'react'

 export const Route = ({path, component}) => {
    const pathname = window.location.pathname;

    if(pathname.match(path)){
        return React.createElement(component);
    }else {
        return null;
    }
}

