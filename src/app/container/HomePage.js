import {RESTORANS, findDataFromQuery, findRestoransNearBy} from "../services/restorans";
import HomePage from "../component/view/homePage/HomePage";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        [RESTORANS]: state.restorans[RESTORANS]
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({findDataFromQuery, findRestoransNearBy}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
