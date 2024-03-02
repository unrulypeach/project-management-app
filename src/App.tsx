function App() {
  return (
    <>
      <div>
        <h1>This is Heading One</h1>
        <h2>This is Heading Two</h2>
        <h3>This is Heading Three</h3>
        <h4>This is Heading Four</h4>
        <p>
          No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a
          fair and public hearing by an independent and impartial tribunal, in the determination of his rights and
          obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with
          his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the
          right to the protection of the law against such interference or attacks.
        </p>
        <input type="text" title={'Name'} placeholder={'Placeholder'} />
        <input type="text" placeholder="disabled" disabled={true} />
        <input type="radio" className="radio-item" />
        <input type="radio" className="radio-item" />

        <input type="checkbox" name="" id="" />

        <a href="https://www.google.com">This is a link</a>

        <ol>
          <li>abc</li>
          <li>def</li>
          <li>ghi</li>
        </ol>
        <ul>
          <li>abc</li>
          <li>def</li>
          <li>ghi</li>
        </ul>
      </div>
    </>
  );
}

export default App;
