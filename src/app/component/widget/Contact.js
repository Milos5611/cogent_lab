import PropTypes from "prop-types";
import React from "react";
import Typography from "material-ui/Typography";
import {withStyles} from "material-ui/styles";

const styles = theme => ({
    phone: {
        color: theme.palette.text.secondary,
    }
});

const Contact = ({phone, classes}) => {
    return (
        <Typography
            className={classes.phone}
            component="p"
        >
            {`Phone number: ${phone.phone || "Unfortunately we don't have their phone"}`}
        </Typography>
    );
};

Contact.propTypes = {
    phone: PropTypes.object,
    classes: PropTypes.object
};

export default withStyles(styles)(Contact);
