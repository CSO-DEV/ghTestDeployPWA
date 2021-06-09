import logo from './logo.svg';
import './App.css';
import DragAndDrop from '../src/testDragandDrop/DragAndDrop';
import SingleSelectListbox from "../src/listbox/SingleSelectListbox"
function App() {
  return (
    <div className="App">
      <DragAndDrop/>
      <SingleSelectListbox/>
    </div>
  );
}

export default App;
