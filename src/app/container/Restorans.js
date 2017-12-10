import {RESTORANS, findRestoransNearBy} from "../services/restorans";
import Restorans from "../component/view/restorans/Restorans";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        [RESTORANS]: state.restorans[RESTORANS]
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({findRestoransNearBy}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Restorans);
