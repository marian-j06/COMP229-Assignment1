import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
return (
<div>
<h1>My Portfolio</h1>
<nav className="site-nav">
<Link to="/" className="site-logo">
<img src="/logo.svg" alt="JM logo" width="44" height="44" />
</Link>
<Link to="/">Home</Link> | <Link to="/about">About</Link> |
<Link to="/education">Education</Link>| <Link
to="/project">Project</Link>| <Link to="/services">Services</Link>| <Link
to="/contact">Contact</Link>
</nav>
<hr />
</div>
);
}