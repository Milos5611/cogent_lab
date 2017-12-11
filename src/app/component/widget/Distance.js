import PropTypes from "prop-types";
import React from "react";
import Typography from "material-ui/Typography";
import {withStyles} from "material-ui/styles";

const styles = theme => ({
    distance: {
        color: theme.palette.text.secondary,
    }
});

const Distance = ({distance, classes}) => {
    return (
        <Typography
            className={classes.distance}
            component="p"
        >
            {`Distance from you: ${distance.distance}`}
        </Typography>
    );
};

Distance.propTypes = {
    distance: PropTypes.object,
    classes: PropTypes.object
};

export default withStyles(styles)(Distance);
