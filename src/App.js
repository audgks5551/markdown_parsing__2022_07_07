import logo from './logo.svg';
import './App.css';

function App() {
  const hello = `
  # header # header
  ## header ## header
  ### header ### header
  #### header #### header
  ##### header ##### header
  ###### header ###### header
  `;
  const array = hello.split("\n");
  const markdown = /^[\s]{0,}\#\s(.+)/g;
  const text = array.map(a => {
    a = a.replace(/^[\s]{0,}\#{1}\s(.+)/g, '<h1>$1</h1>');
    a = a.replace(/^[\s]{0,}\#{2}\s(.+)/g, '<h2>$1</h2>');
    a = a.replace(/^[\s]{0,}\#{3}\s(.+)/g, '<h3>$1</h3>');
    a = a.replace(/^[\s]{0,}\#{4}\s(.+)/g, '<h4>$1</h4>');
    a = a.replace(/^[\s]{0,}\#{5}\s(.+)/g, '<h5>$1</h5>');
    a = a.replace(/^[\s]{0,}\#{6}\s(.+)/g, '<h6>$1</h6>');
    console.log(a)
    return a
  })
  console.log(text)
  const markup = () => {
    return {__html : text}
  };

  return (
    <div>
      {text.map((t, index) => {
        return <div key={index} dangerouslySetInnerHTML={{__html : t}}></div>
      })}


    </div>
  );
}

export default App;
