import React, {Component} from "react";
import PropTypes from "prop-types";
import Restoran from "../../widget/Restoran";

class Home extends Component {

    static propTypes = {
        findRestoransNearBy: PropTypes.func,
        restoranDetail: PropTypes.func,
        restorans: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {findRestoransNearBy} = this.props;
        findRestoransNearBy();
    }

    render() {
        const {restorans, restoranDetail} = this.props;
        return (
            <Restoran
                details={restoranDetail}
                restoran={restorans}
            />
        );
    }

}

export default Home;
