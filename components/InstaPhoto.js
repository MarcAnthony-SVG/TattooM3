import Image from "next/image";
const InstaPhoto = (props) => {
  return (
    <div
      style={{
        margin: "10px",
        border: "solid 1px",
        width: "190px",
        height: "290px",
      }}
    >
      <div className="InfoContainer" style={{ borderBottom: "1px solid black", width: "auto" }}>
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
    </div>
  );
};

export default InstaPhoto;
