import { Link } from "react-router-dom";
import './result-table.css';

function ResultTable(props) {

  return (
    <div className="result-table-container container card-panel">
      <div className="table-row">
        <h3>Quiz Result</h3>
        <button className="btn btn-sm test-btn"><Link to="/home">Go To Home</Link></button>
      </div>
      <div className="table-row">
        <div className="column w-80">Question</div>
        <div className="column w-20">Status</div>
      </div>
      <div>
        {
          props.list.map((item, index) => {
            return (
            <div className="table-row" key={index}>
              <div className="column w-80">{item.question}</div>
              <div className="column w-20">{item.status}</div>
            </div>
            )
          })
        }
      </div>
    </div>
  );

}

export default ResultTable;
