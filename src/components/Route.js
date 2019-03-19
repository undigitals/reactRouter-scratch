import React from 'react'
import {createBrowserHistory} from "history"

export const history = createBrowserHistory();

 export const Route = ({path, component}) => {
    const pathname = window.location.pathname;

    if(pathname.match(path)){
        return component();
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
