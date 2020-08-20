import React from 'react';
import firebase from "./firebase"
import TimesList from "./components/timesList"
import AddTimeEntryForm from './components/addTimeEntryForm';




function App() {
  return (
    <div className="App">
      <h1>Just Clock It</h1>
      <AddTimeEntryForm/>
      <TimesList/>
      
    </div>
  );
}

export default App;
