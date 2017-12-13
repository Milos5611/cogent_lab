import React, { Component } from "react";
import PropTypes from "prop-types";
import Restoran from "../../widget/Restoran";
import TextField from "material-ui/TextField";
import debounce from "lodash/debounce";
import uuid from "uuid";
import { withStyles } from "material-ui/styles";

const styles = {
    search: {
        width: "91.5%",
        margin: "20px 15px",
        "@media screen and (max-width: 768px)": {
            width: "100%"
        }
    }
};

class Home extends Component {

    static propTypes = {
        findRestoransNearBy: PropTypes.func.isRequired,
        findDataFromQuery: PropTypes.func.isRequired,
        restoranDetail: PropTypes.func.isRequired,
        restorans: PropTypes.array,
        classes: PropTypes.object.isRequired,
    };

    constructor( props ) {
        super(props);
        // In case of feature needs keep query parameter
        this.state = {
            value: ""
        };

        // dispatch find
        this.changed = debounce(props.findDataFromQuery, 200);
    }

    componentDidMount() {
        const { findRestoransNearBy } = this.props;
        findRestoransNearBy();
    }

    handleQuery = ( query ) => {
        const value = query.target.value;

        // Keep query with in state and fire rest call on callback
        this.setState({ value: value }, () => {
            this.changed(value);
        });
    };

    render() {
        const { restorans, restoranDetail, classes } = this.props;
        return (
            <React.Fragment>
                <div className="office"/>

                <section className="wrapper">
                    <TextField
                        className={classes.search}
                        id="search"
                        label="Search for your favorite restoran"
                        placeholder="Type something"
                        type="search"
                        autoFocus
                        fullWidth
                        onKeyDown={( query ) => this.handleQuery(query)}
                    />

                    {restorans && restorans.map(restoran => {
                        return (
                            <Restoran
                                key={uuid.v4()}
                                restoran={restoran}
                                details={restoranDetail}
                            />
                        );
                    })}
                </section>
            </React.Fragment>
        );
    }

}

export default withStyles(styles)(Home);
