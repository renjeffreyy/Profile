import React from 'react';

const Contact = () => {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message to me!</label>
        <textarea />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
