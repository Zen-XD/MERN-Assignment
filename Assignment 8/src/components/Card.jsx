import React from "react";

const Card = ({ props }) => {
    return (
        <div className="card">
            <img
                src={props.image}
                alt={props.title}
            />

            <div className="rating">★ ★ ★ ★ ★</div>

            <a href="#">{props.title}</a>

            <p className="duration">⏱ {props.duration}</p>

            <div className="author">
                <div className="avatar">SI</div>
                <div className="author-text">
                    By Sipalaya InfoTech <span>in {props.category}</span>
                </div>
            </div>

            <div className="price-row">
                <span className="original">Rs.{props.original}</span>
                <span className="price">Rs.{props.price}</span>
            </div>

            <button className="add-cart">Add to cart</button>
        </div>
    );
};

export default Card;
