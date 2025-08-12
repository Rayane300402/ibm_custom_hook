import  { Component } from 'react'
import fruitData from '../data/Fruit.json';

export default class FetchJsonData extends Component {
  render() {
    const data = fruitData; 
    return (
      <div>
        <h1 className="useFetch_heading">Fetch JSON Data</h1>

          <ul className="list_data_main">
            {data && data.map((e, index) => (
                <li key={index} className="list_data">
                    <h3>{e.name}</h3>
                    <p>
                    <strong>Importance: </strong>
                    {e.importance}
                    </p>
                    <p>
                    <strong>Benefits: </strong>
                    {e.benefits}
                    </p>
                    <p>
                    <strong>Time to eat: </strong>
                    {e.best_time_to_intake}
                    </p>
                </li>
            ))}
          </ul>
      </div>
    )
  }
}
