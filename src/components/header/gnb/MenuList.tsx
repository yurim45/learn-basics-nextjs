import React from 'react';
import { Link } from 'react-scroll';

const MenuList = () => {
  return (
    <>
      <Link to="aboutMe" smooth={true}>
        <li>About Me</li>
      </Link>
      <Link to="archive" smooth={true}>
        <li>Archive</li>
      </Link>
      <Link to="skills" smooth={true}>
        <li>Skills</li>
      </Link>
      <Link to="projects" smooth={true}>
        <li>Projects</li>
      </Link>
      <Link to="career" smooth={true}>
        <li>Career</li>
      </Link>
    </>
  );
};

export default MenuList;
