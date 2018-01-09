/* eslint-disable react/jsx-handler-names */
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class RestoranDetail extends Component {

    static propTypes = {
        restoran: PropTypes.object,
        google: PropTypes.object
    };

    constructor( props ) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };

        // binding this to event-handler functions
        this.onMarkerClick = ::this.onMarkerClick;
        this.onMapClicked = ::this.onMapClicked;
        this.onInfoWindowClose = ::this.onInfoWindowClose;
    }

    onMarkerClick = ( props, marker ) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    onMapClicked = () => {
        if ( this.state.showingInfoWindow ) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    onInfoWindowClose() {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
    }

    render() {
        const { restoran } = this.props;
        return (
            <Map
                google={this.props.google}
                zoom={18}
                onClick={this.onMapClicked}
                initialCenter={{ lat: 44.816368, lng: 20.437072 }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={restoran && restoran.name}
                    position={{ lat: restoran && restoran.location.lat, lng: restoran && restoran.location.lng }}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    name={"PRODYNA D.O.O"}
                />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onInfoWindowClose}
                >
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(RestoranDetail);
