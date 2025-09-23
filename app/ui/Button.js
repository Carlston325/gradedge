const buttonStyle =
  "bg-orange-200 border-2 rounded-full p-2 hover:shadow-md hover:bg-orange-300";

function Button(props) {
  return <button className={buttonStyle}>{props.btnName}</button>;
}

export default Button;
