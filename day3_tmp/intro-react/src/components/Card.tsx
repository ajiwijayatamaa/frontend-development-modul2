interface CardProps {
  name: string;
  price: number;
}

const Card = (props: CardProps) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Rp {props.price}</p>
    </div>
  );
};

export default Card;