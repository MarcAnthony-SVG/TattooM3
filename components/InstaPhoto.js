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
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: dprops.xys.interpolate(trans), margin: "10px" }}
    >
      <div
        className="InfoContainer"
        style={{ borderBottom: "1px solid black", width: "auto" }}
      >
        <h3>{props.user}</h3>
      </div>
      {/* <div className="PHOTOS">
        {props.state.photos.map((photo, id) => (
                  <h3>{props.user}</h3>
          <Image
            key={id}
            alt="Mountains"
            src={photo}
            width={500}
            height={500}
          ></Image>
            <div style={{ borderTop: "1px solid black", width: "auto" }}>
        <p>
          Likes<span> #</span>
        </p>
      </div>
        ))}
      </div> */}
      <Image
        alt="Mountains"
        src="/Placeholder.png"
        width={500}
        height={500}
      ></Image>
      <div style={{ borderTop: "1px solid black", width: "auto" }}>
        <p>
          Likes<span> #</span>
        </p>
      </div>
    </animated.div>
  );
};

export default InstaPhoto;
