import React from 'react';
import NoteInput from './NoteInput';
import Footer from './Footer';

export default function Note() {
  return (
    <div className="Page">
      <main>
        <h1>Note</h1>
        <NoteInput/>
      </main>
      <Footer />
    </div>
  )
}
