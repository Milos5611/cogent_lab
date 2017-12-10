import React, {Component} from "react";
import Button from "material-ui/Button";
import PropTypes from "prop-types";
import Restoran from "./Restoran";

class Restorans extends Component {

    static propTypes = {
        findRestoransNearBy: PropTypes.func,
        restorans: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.handleLoadRestorans = ::this.handleLoadRestorans;
    }

    handleLoadRestorans() {
        const {findRestoransNearBy} = this.props;
        findRestoransNearBy();
    }

    render() {
        const {restorans} = this.props;
        return (
            <React.Fragment>
                <Restoran
                    restoran={restorans}
                />
                <Button
                    onClick={this.handleLoadRestorans}
                    raised
                    color="primary"
                >
                    {"Load all restorans near by"}
                </Button>
            </React.Fragment>
        );
    }

}

export default Restorans;
