import TitleItem from "./TitleItem";
import "./expense.css";

function HeaderItem(props) {
  return (
    <div>
      <TitleItem title={props.title} />
      <div className="expenses">
        <p>Date : {props.date}</p>
        <p>item : {props.item} </p>
        <p>amount : {props.amount}</p>
      </div>
    </div>
  );
}

export default HeaderItem;
