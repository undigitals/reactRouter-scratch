import React from 'react'
import createHistory from "history/createBrowserHistory"

export const history = createHistory();

 export const Route = ({path, component}) => {
    const pathname = window.location.pathname;

    if(pathname.match(path)){
        return React.createElement(component);
    }else {
        return null;
    }
}

export const Link = ({ to, children }) => (
  <a
    onClick={e => {
      e.preventDefault();
      history.push(to);
    }}
    href={to}
  >
    {children}
  </a>
);
