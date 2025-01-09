import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

// Array of weekday names.
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  // Get the current day of the week (0 - Sunday, 1 - Monday, etc.).
  const dayInAWeek = new Date().getDay();
  // Calculate the forecast days based on the current day.
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
      <>
        {/* Accordion to display the 7-day forecast. */}
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {/* Summary information for each day. */}
                    <div className="daily-item">
                      <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                      <label className="day">{forecastDays[idx]}</label>
                      <label className="description">{item.weather[0].description}</label>
                      <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {/* Detailed information for each day, shown when expanded. */}
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                      <label>Pressure:</label>
                      <label>{item.main.pressure}</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity:</label>
                      <label>{item.main.humidity}</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Clouds:</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Wind speed:</label>
                      <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Sea level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Feels like:</label>
                      <label>{item.main.feels_like}°C</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
          ))}
        </Accordion>
      </>
  );
};

export default Forecast;