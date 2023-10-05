import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import "./Travel.css";
import { useState } from "react";

const Travel = () => {
  const [location, setLocation] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };
  return (
    <>
      <div className="stats">
        <h2>To reach your destination:</h2>
        <p>
          No. of Stations left: <span>00</span>
        </p>
        <p>
          React Time: <span>00:00</span>
        </p>
      </div>
      <div className="header">
        <div>Arrival</div>
        <div>Station Name</div>
      </div>
      <div className="map">
        <div className="track"></div>
        <div className="stations">
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
          <div className="station">
            <div className="stop"></div>
            <div className="name">Nagole</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Your Destination</p>

        <FormControl size="medium" className="curr">
          <InputLabel id="destination-label" sx={{ backgroundColor: "white" }}>
            Select your destination
          </InputLabel>
          <Select
            sx={{ backgroundColor: "white" }}
            labelId="destination-label"
            id="demo-simple-select"
            value={location}
            label="Age"
            onChange={handleChange}>
            <MenuItem value={"LBNagar"}>LB NAGAR</MenuItem>
            <MenuItem value={"Ameerpet"}>Ameerpet</MenuItem>
            <MenuItem value={"Raidurg"}>Raidurg</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};
export default Travel;
