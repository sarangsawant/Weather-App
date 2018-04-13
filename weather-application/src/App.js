import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const APP_KEY = "a2e6ffc5c58e173911390e3a96b3bb68";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async(e) => {
        e.preventDefault();
        console.log("Here");
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid="+ APP_KEY;

        if (city && country) {
            const api_call = await fetch(url);
            const data = await api_call.json();
            console.log(data);

            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values!!"
            });
        }
       
    } 
    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
};

export default App;