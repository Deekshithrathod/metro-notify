// import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Travel from "./components/Travel/Travel";

// type locData = {
//   lat: number;
//   lon: number;
// };
// function showNotification() {
//   Notification.requestPermission().then((result) => {
//     if (result === "granted") {
//       navigator.serviceWorker.ready.then((registration) => {
//         registration.showNotification("Vibration Sample", {
//           body: "Buzz! Buzz!",
//           icon: "../images/touch/chrome-touch-icon-192x192.png",
//           vibrate: [200, 100, 200, 100, 200, 100, 200],
//           tag: "vibration-sample",
//         });
//       });
//     }
//   });
// }
function App() {
  // const [lat, setLat] = useState(0);
  // const [lon, setLon] = useState(0);

  // const [dataLog, setDataLog] = useState<locData[]>([]);

  // const _handleClick = async () => {
  //   showNotification();

  //   if ("Notification" in window) {
  //     const permission = await Notification.requestPermission();
  //     if (permission === "granted") {
  //       setTimeout(() => {
  //         new Notification("Hello!", {
  //           body: "This is your notification",
  //         });
  //       }, 20000);
  //     } else {
  //       alert("Notification permission denied");
  //     }
  //   }
  // };
  // const _handleTrackLocation = () => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;

  //         setLat(latitude);
  //         setLon(longitude);

  //         setDataLog([...dataLog, { lat, lon }]);

  //         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  //       },
  //       (error) => {
  //         console.error(`Error getting location: ${error.message}`);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported in this browser.");
  //   }
  // };

  return (
    <>
      <Home />
      <Travel />
      {/* <div>
        <button onClick={handleClick}>Notify Me</button>
        <button onClick={handleTrackLocation}>Track Location</button>
      </div>
      <div className="location-data">
        {dataLog.map((data, index) => {
          return (
            <div key={index}>
              Latitude: {data.lat}, Longitude: {data.lon}
            </div>
          );
        })}
        <div className="point"></div>
      </div> */}
    </>
  );
}

export default App;
