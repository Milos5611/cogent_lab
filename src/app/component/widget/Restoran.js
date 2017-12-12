import * as ROUTES from "../../common/routes";
import Card, {CardActions, CardContent} from "material-ui/Card";
import Address from "./Address";
import Button from "material-ui/Button";
import Category from "./Category";
import Contact from "./Contact";
import Distance from "./Distance";
import {Link} from "react-router-dom";
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

const Restoran = ({restoran, classes}) => {
    return (
        <Card
            className={"card"}
            key={uuid.v4()}
        >
            <CardContent>
                <Typography
                    type="headline"
                    component="h2"
                >
                    {restoran.name}
                </Typography>

                <article>
                    <Address address={restoran.location}/>

                    <Contact phone={restoran.contact}/>

                    <Category name={restoran.categories}/>

                    <Distance distance={restoran.location}/>
                </article>
            </CardContent>
            <CardActions
                className={classes.cardAction}
            >
                <Link to={ROUTES.restoranDetail(restoran.id)}>
                    <Button
                        dense
                        color="primary"
                    >
                        {"See details"}
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

Restoran.propTypes = {
    restoran: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Restoran);
