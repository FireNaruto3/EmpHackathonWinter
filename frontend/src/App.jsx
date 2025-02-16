import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/resources")
      .then((response) => setResources(response.data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Resource Accessibility Map</h1>
      <ul>
        {resources.map((r, i) => (
          <li key={i}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
