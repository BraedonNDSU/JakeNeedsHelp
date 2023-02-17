import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header"> Scheels Data Transfer Application</div>
      <div className="App-body">
        <div className="Body-prodTable">
          <div className="ProdTable-search">Search By: <input type="text" id="prodTableSearch" /> </div>
          <div className="ProdTable-body">
           <div className = "ProdBody-header">Production Table </div>
           <div className = "ProdBody-body">FAKE DATA</div>
          </div>
          <div className="ProdTable-submitButton">
            <button>Submit</button>
          </div>
          <div className="ProdTable-resetButton">
            <button>Reset</button>
          </div>
        </div>
        <div className="Body-testTable">
          <div className="TestTable-search">Search By: <input type="text" id="testTableSearch" /> </div>
          <div className="TestTable-body">
           <div className = "TestBody-header">Test Environment Table </div>
           <div className = "TestBody-body">FAKE DATA</div>
          </div>
          <div className="TestTable-submitButton">
            <button>Submit</button>
          </div>
          <div className="ProdTable-resetButton">
            <button>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
