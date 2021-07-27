import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import { ItemStyles } from './ItemStyles'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ItemStyles(theme));

export const Item = ({ producto }) => {

    const classes = useStyles();

    const { id, pictureUrl, title, price, description } = producto;

    return (
        <div className={classes.item}>
            <Link to={`/product/${id}`} className={classes.link}>
                <CardMedia
                    className={classes.img}
                    component='img'
                    image={pictureUrl}
                    title={title}
                    alt={title}
                />
                <div>
                    <div className='row--1'>
                        <h3 className={classes.title}>{title}</h3>
                        <h4 className={classes.price}>${price}</h4>
                    </div>
                    <h5 className={classes.description}>{description}</h5>
                </div>
            </Link>
        </div>
    );
}
