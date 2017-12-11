import Card, {CardActions, CardContent} from "material-ui/Card";
import Address from "./Address";
import Button from "material-ui/Button";
import Category from "./Category";
import Contact from "./Contact";
import Distance from "./Distance";
import PropTypes from "prop-types";
import React from "react";
import Typography from "material-ui/Typography";
import uuid from "uuid";
import {withStyles} from "material-ui/styles";

const styles = {
    cardAction: {
        position: "absolute",
        bottom: 0
    }
};

const Restoran = ({restoran, classes, details}) => {
    return (
        <div className={"wrapper"}>
            {restoran && restoran.map(r => (
                <Card
                    className={"card"}
                    key={uuid.v4()}
                >
                    <CardContent>
                        <Typography
                            type="headline"
                            component="h2"
                        >
                            {r.name}
                        </Typography>

                        <article>
                            <Address address={r.location}/>

                            <Contact phone={r.contact}/>

                            <Category name={r.categories}/>

                            <Distance distance={r.location}/>
                        </article>
                    </CardContent>
                    <CardActions
                        className={classes.cardAction}
                    >
                        <Button
                            dense
                            color="primary"
                            onClick={() => details(r.id)}
                        >
                            {"See details"}
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
    details: PropTypes.func.isRequired
};

export default withStyles(styles)(Restoran);
