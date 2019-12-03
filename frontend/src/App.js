import React from "react";
import "./App.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import logo from "./assets/logobo.svg";

function App() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
    setAddress(value);
    console.log(value);
    console.log(results);
  };

  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="BuscaOferta" />
        <p>
          Escolha sua <strong>cidade</strong> para que possamos pesquisar
          ofertas
        </p>

        <form>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <input
                  {...getInputProps({ placeholder: "Digite o endereço" })}
                />
                <div>
                  {loading ? <div>...loading</div> : null}
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active ? "#591259" : "#fff"
                    };

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </form>
      </div>
    </div>
  );
}

export default App;
