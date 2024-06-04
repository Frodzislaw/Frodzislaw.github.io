import React, { useEffect, useState } from 'react';
import './style.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=e03ab6b6b450718aa2935ad0dbd802a7&units=metric`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!weatherData) {
        return <p>No weather data available</p>;
    }

    return (
        <div className="weather-container">
            <div className="weather-info">
                <h1 className="weather-title">Pogoda w Londynie</h1>
                <div className="weather-details">
                    <p className="weather-detail">Temperatura: {weatherData.main.temp}°C</p>
                    <p className="weather-detail">Wilgotność: {weatherData.main.humidity}%</p>
                    <p className="weather-detail">Warunki: {weatherData.weather[0].description}</p>
                </div>
            </div>
        </div>
    );
};

export default Weather;
