import StarIcon from "@mui/icons-material/Star";

export default function ReviewCard(props) {
  return (
    <div className="review-card" ref={props.ref}>
      <h3>
        {props.name}
        {props.role ? (
          <span className="text-base text-indigo-200"> /{props.role}</span>
        ) : null}
      </h3>
      <div>
        {[...Array(props.stars)].map((_, index) => (
          <StarIcon key={index} className="text-yellow-500" />
        ))}
      </div>
      <p>{props.review}</p>
    </div>
  );
}
