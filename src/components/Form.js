import React from 'react';

export default function Form() {
  return (
    <>
      <h2>Add new Book</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <select>
          <option>Action</option>
          <option>Science Fiction</option>
          <option>Economy</option>
        </select>
        <button type="submit"> Add Book</button>
      </form>
    </>
  );
}
