import "./Card.css";

const Card = (props) => {
  let abc;
  let gfh;
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
