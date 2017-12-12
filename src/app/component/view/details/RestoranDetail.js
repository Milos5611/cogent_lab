import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

class RestoranDetail extends Component {

    static propTypes = {
        restoran: PropTypes.object,
        match: PropTypes.object.isRequired,
        restoranDetail: PropTypes.func.isRequired
    };

    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let restoranId = this.props.match.params.id;
        this.props.restoranDetail(restoranId);
    }

    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={"Kreyser Avrora"}
                />
            </GoogleMapReact>
        );
    }
}

const AnyReactComponent = ({text}) => <div>{text}</div>;

export default RestoranDetail;
