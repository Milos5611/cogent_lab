import Card, {CardActions, CardContent} from "material-ui/Card";
import Button from "material-ui/Button";
import PropTypes from "prop-types";
import React from "react";
import Typography from "material-ui/Typography";
import uuid from "uuid";
import {withStyles} from "material-ui/styles";

const styles = {
    card: {
        width: 345,
        margin: "0 20px"
    }
};

const Restoran = ({restoran, classes}) => {
    return (
        <div className={"wrapper"}>
            {restoran && restoran.map(r => (
                <Card
                    className={classes.card}
                    key={uuid.v4()}
                >
                    <CardContent>
                        <Typography
                            type="headline"
                            component="h2"
                        >
                            {r.name}
                        </Typography>
                        <Typography component="p">
                            {"Loren Ipsum"}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            dense
                            color="primary"
                        >
                            {"Share"}
                        </Button>
                        <Button
                            dense
                            color="primary"
                        >
                            {"Learn More"}
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

Restoran.propTypes = {
    restoran: PropTypes.array,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Restoran);
