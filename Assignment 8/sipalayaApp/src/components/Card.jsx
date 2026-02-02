import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />

            <div className="rating">
                ★ ★ ★ ★ ★
            </div>

            <a href={props.link}>{props.title}</a>
            <p>{props.duration}</p>

            <div className="author">
                <div className="avatar">SI</div>
                <div className="author-text">
                    By Sipalaya InfoTech <span>in {props.category}</span>
                </div>
            </div>

            <p>
                <span className="original">Rs.{props.original}</span>{" "}
                <span className="price">Rs.{props.price}</span>
            </p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Card;
