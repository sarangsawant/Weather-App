import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const APP_KEY = "a2e6ffc5c58e173911390e3a96b3bb68";

class App extends React.Component {

    getWeather = async(e) => {
        e.preventDefault();
        console.log("Here");
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid="+ APP_KEY;
        const api_call = await fetch(url);

        const data = await api_call.json();
        console.log(data);
    } 
    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather />
            </div>
        );
    }
};

export default App;