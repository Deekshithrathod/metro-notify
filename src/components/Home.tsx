import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import "./Home.css";
import { useState } from "react";
import logo from "../assets/logo.png";

const Home = () => {
  const [location, setLocation] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };
  const handleNotifyClick = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Not Title", {
            body: "Notification Body",
            icon: "logo.png", // Path to your notification icon
          });
        }
      });
    }
  };

  return (
    <>
      <div className="top"></div>
      <div className="middle">
        <h2 className="subtitle">Stay informed with....</h2>
        <div className="hero">
          <h1 className="title">Metro Notify</h1>
          <img src={logo} />
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
            <button onClick={handleNotifyClick}>Notify Me</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
