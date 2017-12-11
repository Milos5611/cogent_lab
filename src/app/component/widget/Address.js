import PropTypes from "prop-types";
import React from "react";
import Typography from "material-ui/Typography";
import {withStyles} from "material-ui/styles";

const styles = theme => ({
    address: {
        marginTop: 12,
        color: theme.palette.text.secondary,
    }
});


const Address = ({address, classes}) => {
    return (
        <Typography
            className={classes.address}
            component="p"
        >
            {`Address: ${address.address || "Unfortunately we don't have their address"}`}
        </Typography>
    );
};

Address.propTypes = {
    address: PropTypes.object,
    classes: PropTypes.object
};

export default withStyles(styles)(Address);
