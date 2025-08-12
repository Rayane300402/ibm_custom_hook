
import UseFetch from "./UseFetch";

const FetchYoga = () =>  {
  const [data] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
    console.log(data);
    return (
        <>
      <div>
        <h1 className="useFetch_heading">Fetch Yoga Data</h1>
        <ul className="list_data_main">
          {data &&
            data.map((e, index) => (
              <li key={index} className="list_data">
                <h3>{e.name}</h3>
                <p>
                  <strong>Benefits: </strong>
                  {e.benefits}
                </p>
                <p>
                  <strong>Time duration: </strong>
                  {e.time_duration}
                </p>
              </li>
            ))}
        </ul>
      </div>
      </>
    );
  }

  export default FetchYoga;
