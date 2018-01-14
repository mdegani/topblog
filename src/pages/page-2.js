import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>About me</h1>
    <p>I am a former Human Resources spreadsheet builder.</p>
    <p>MS Excel led me to SQL Server and that led me to Windows Forms, ASP.NET MVC and AngularJS.</p>
    <p>A couple years ago, I started developing software using JavaScript fulltime.</p>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/markdegani/">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/mdegani">Github</a>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
