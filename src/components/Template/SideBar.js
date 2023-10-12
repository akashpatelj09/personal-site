import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Akash Patel</h2>
        <p><a href="mailto:akash@akashpatel.info">akash@akashpatel.info</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, There!!! I am Akash an experienced Project Management
        Professional and Software Engineer with over seven years of
        software delivery experience working with various international
        blue-chip companies in the Higher Education, Retail, Manufacturing, and
        Electronics industries.I hold key interests in volunteering work and
        financial independence. A cycling enthusiast which helps me to meet
        new people, explore new places, keep myself fit and have lot of fun.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Akash Patel <Link to="/">akashpatel@info</Link>.</p>
    </section>
  </section>
);

export default SideBar;
