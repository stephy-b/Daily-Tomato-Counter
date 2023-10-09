import { useState } from "react";
import "./styles.css";

/*
  1. Select day, Turn it bold (default "M")
  - need a dedicated state variable thats shows which date is selected
  - can be an index or a str that matches the days arr
  - create onclick handler
  - conditional style property if selected change font to black
  2. Create a state for each day's tomatoes 🍅 
  - when we change state, we cant change the object storing the tomato data
  - we need to make a copy and then pass in the new object (... syntax)
  {...allTomatoes, [day]: `${oldDayTomatoes}🍅`}
  taking the old object, copying it inside of a new one,
  using a variable for the key, then creating a new str to go inside that key
  3. Increment / decrement should work based
     which day is selected 
*/

const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];

export default function App() {
  const [chosenDay, setChosenDay] = useState("M");
  const [allTomatoes, setAllTomatoes] = useState({});
  console.log(chosenDay, "day");

  const addTomato = () => {
    setAllTomatoes({
      ...allTomatoes,
      [chosenDay]: `${allTomatoes[chosenDay] || ""}🍅`
    });
  };

  const removeTomato = () => {
    const currentTomatoes = allTomatoes[chosenDay];
    if (currentTomatoes) {
      const updatedTomatoes = currentTomatoes.slice(0, -2); // Tomato emoji = 2 characters
      setAllTomatoes({
        ...allTomatoes,
        [chosenDay]: updatedTomatoes
      });
    }
  };

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day) => (
          <div
            onClick={() => setChosenDay(day)}
            key={day}
            className="tomato-box"
            style={chosenDay === day ? { color: "black" } : {}}
          >
            <h3>{day}</h3>
            <div className="tomato-day-box" style={{ fontSize: "24px" }}>
              {allTomatoes[day]}
            </div>
          </div>
        ))}
        <div className="buttons-container">
          <div className="button" onClick={removeTomato}>
            -
          </div>
          <div className="button" onClick={addTomato}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}
