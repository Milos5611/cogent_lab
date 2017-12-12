import {RESTORAN, restoranDetail} from "../services/restorans";
import RestoranDetail from "../component/view/details/RestoranDetail";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        [RESTORAN]: state.restorans[RESTORAN]
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({restoranDetail}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RestoranDetail);
