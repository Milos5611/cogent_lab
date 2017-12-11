import React from "react";
import Typography from "material-ui/Typography";
import uuid from "uuid";
import {withStyles} from "material-ui/styles";

const styles = theme => ({
    address: {
        color: theme.palette.text.secondary,
    }
});

const Category = ({name, classes}) => {
    return name && name.map(cat => {
        return (
            <Typography
                className={classes.address}
                key={uuid.v4()}
                component="p"
            >
                {`Categories: ${cat.name}`}
            </Typography>
        );
    });
};

export default withStyles(styles)(Category);
