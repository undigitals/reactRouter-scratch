import React, {Component} from 'react'
import PropTypes from "prop-types"
import {createBrowserHistory} from "history"


 export const Route = ({path, component}, {location}) => {
    const pathname = location.pathname;

    if(pathname.match(path)){
        return component();
    }else {
        return null;
    }
}

export const Link = ({ to, children }, {history}) => (
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

export class Router extends React.Component {
  static childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.history = createBrowserHistory();
    this.history.listen(() => this.forceUpdate());
  }

  getChildContext() {
    return {
      history: this.history,
      location: window.location
    };
  }

  render() {
    return this.props.children;
  }
}

export class Redirect extends React.Component {
  static contextTypes = {
    history: PropTypes.object
  };

  componentDidMount() {
    const history = this.context.history;
    const to = this.props.to;
    history.push(to);
  }

  render() {
    return null;
  }
}