import style from "./Banner.module.css";

interface BannerProps {
  orang: string;
  hobby?: string;
}

const Banner = (props: BannerProps) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1 className={style.biru}>Banner {props.orang}</h1>

      {props.hobby ? <p>{props.hobby}</p> : null}
    </div>
  );
};

export default Banner;
