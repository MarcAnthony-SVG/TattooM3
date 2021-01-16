import Image from "next/image";
import { useSpring, animated } from "react-spring";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const InstaPhoto = (props) => {
  const [dprops, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    // <div
    //   style={{
    //     margin: "10px",
    //     border: "solid 1px",
    //     width: "190px",
    //     height: "290px",
    //   }}
    // >
      <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: dprops.xys.interpolate(trans) ,margin: "10px"}}
      >
        <div
          className="InfoContainer"
          style={{ borderBottom: "1px solid black", width: "auto" }}
        >
          <h3>{props.user}</h3>
        </div>
        <Image
          alt="Mountains"
          src="/Placeholder.png"
          width={500}
          height={500}
        ></Image>
        <div style={{ borderTop: "1px solid black", width: "auto" }}>
          <p2>
            Likes<span> #</span>
          </p2>
        </div>
      </animated.div>
    // </div>
  );
};

export default InstaPhoto;
