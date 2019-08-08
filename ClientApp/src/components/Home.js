import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>HELLO, Google !</h1>
        <p>Welcome to Single-Page Web App application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://www.javascript.com/'>JavaScript</a> for Cross-Platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for Client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then Test Component <em>click Home</em> Back to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically With Heroku, So client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time and Local Server features are disabled, and <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. Open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code> and <code>npm start</code>.</p>
      </div>
    );
  }
}