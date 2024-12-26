import Attribute from "./Attribute";
function App() {
  const data = {
    source : "Bangalore",
    destination : "Mysore",
    distance: "340km",
    duration: "3 Hours 30 Minute"
  }
  return (
      <div>
          <p>The Distance between {data.source} and {data.destination} is {data.distance} and Duration
              is {data.duration}</p>
          <Attribute />

      </div>

  );
}

export default App;
