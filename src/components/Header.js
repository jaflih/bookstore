import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1>Bookstore CMS</h1>
        <Navbar />
      </div>
      <MdAccountCircle className="account" />
    </header>
  );
}
