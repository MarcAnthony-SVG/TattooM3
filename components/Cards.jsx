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

const Cards = ({ userName, id, pic, likes }) => {
  const [dprops, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  //_________________________________________________________________________________________________________________________________________________________
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: dprops.xys.interpolate(trans), margin: '10px' }}
    >
      {console.log(pic)}
      <div className="card-container">
        <h3>{userName}</h3>
        <div className="photo" key={id}></div>
        <Image
          loader={imageLoader}
          alt="Mountains"
          src={pic}
          width={500}
          height={500}
        ></Image>
        <footer>
          <p>
            Likes<span>#{likes}</span>
          </p>
        </footer>
      </div>
      <style jsx>{`
        .card-container {
        }
        h3 {
          overflow: hidden;
          text-overflow: ellipsis;
          // word-wrap: break-word;
        }
        .photo {
          border-bottom: 1px solid black;
          width: auto;
        }
        footer {
          border-top: 1px solid black;
          width: auto;
        }
      `}</style>
    </animated.div>
  );
};

export default Cards;
