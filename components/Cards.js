import Image from 'next/image';
import { useSpring, animated } from 'react-spring';

//React Spring______________________________________________________________________________________________________________________________________________
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Cards = (props) => {
  const [dprops, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  //_________________________________________________________________________________________________________________________________________________________
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: dprops.xys.interpolate(trans), margin: '10px' }}
    >
      <div className="PHOTOS">
        <div
          key={props.id}
          className="InfoContainer"
          style={{ borderBottom: '1px solid black', width: 'auto' }}
        >
          <h3>{props.userName}</h3>
        </div>
        <Image
          alt="Mountains"
          src="/Placeholder.png"
          width={500}
          height={500}
        ></Image>
        <div style={{ borderTop: '1px solid black', width: 'auto' }}>
          <p>
            Likes<span>#{props.likes}</span>
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default Cards;
