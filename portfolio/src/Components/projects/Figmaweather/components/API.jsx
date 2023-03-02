export const Api_key = `0a2e72a74895f38b6a41a75b0dfa55a9`;
const api_current_weather = `https://api.openweathermap.org/data/2.5/weather?appid=${Api_key}`;
export const api_current_weather_by_city = (city, unit = "metric") =>
  `${api_current_weather}&q=${city}&units=${unit}`;

export const API_CURRENT_WEATHER_BY_COORDS = (lat, lon, unit = "metric") =>
  `${api_current_weather}&lat=${lat}&lon=${lon}&units=${unit}`;


const API_FORECAST_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?appid=${Api_key}&units=metric`;

export const API_FORECAST_WEATHER_BY_CITY = (city) =>
  `${API_FORECAST_WEATHER}&q=${city}`;

export const API_ICON = (icon) =>
  `https://openweathermap.org/img/w/${icon}.png`;

export const API_FORECAST_WEATHER_BY_COORDS = (lat, lon) =>
  `${API_FORECAST_WEATHER}&lat=${lat}&lon=${lon}`;
