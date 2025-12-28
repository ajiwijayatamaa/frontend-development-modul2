interface CardProps {
  name: string;
  price: number;
}
const Card = (props: CardProps) => {
  return (
    <div>
      <p>
        {props.name} - {props.price}
      </p>
    </div>
  );
};

export default Card;
