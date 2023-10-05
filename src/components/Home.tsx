import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import "./Home.css";
import { useState } from "react";
const Home = () => {
  const [location, setLocation] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };
  return (
    <>
      <div className="top"></div>
      <div className="middle">
        <h2 className="subtitle">Stay informed with....</h2>
        <div className="hero">
          <h1 className="title">Metro Notify</h1>
          <img src="Logo.png" />
          <div className="form">
            <FormControl size="medium" fullWidth>
              <InputLabel id="destination-label">
                Select your destination
              </InputLabel>
              <Select
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
            <button>Notify Me</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
