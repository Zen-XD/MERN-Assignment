import React from "react";

const Card = ({ title, duration, price, original, category }) => {
    return (
        <div className="card">
            <img
                src="https://via.placeholder.com/400x200?text=Course+Image"
                alt={title}
            />

            <div className="rating">★ ★ ★ ★ ★</div>

            <a href="#">{title}</a>

            <p className="duration">⏱ {duration}</p>

            <div className="author">
                <div className="avatar">SI</div>
                <div className="author-text">
                    By Sipalaya InfoTech <span>in {category}</span>
                </div>
            </div>

            <div className="price-row">
                <span className="original">Rs.{original}</span>
                <span className="price">Rs.{price}</span>
            </div>

            <button className="add-cart">Add to cart</button>
        </div>
    );
};

export default Card;
