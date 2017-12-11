import React, {Component} from "react";
import PropTypes from "prop-types";

class RestoranDetail extends Component {

    static propTypes = {
        restoran: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {restoran} = this.props;
        return (

        );
    }
}

export default RestoranDetail;
