import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  };
  const handleLoClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  };
  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value);
    console.log(text);
  };

  const handleclearClick = () => {
    setText('');
    props.showAlert("Text cleared", "success")
  };

  const handlecopyClick = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success")
  };

  const handleExtraSpClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces cleared", "success")
  };

  const [text, setText] = useState('');
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : '#042743',
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecopyClick}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpClick}>
          Extra Space
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === 'dark' ? 'white' : '#042743',
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(' ').length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : 'Enter something in the above textbox to preview here'}
        </p>
      </div>
    </>
  );
}
