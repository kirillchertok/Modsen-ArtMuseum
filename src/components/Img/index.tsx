import "./styles.scss";

interface IImg {
  [key: string]: string;
}

function Img({ ...attrs }: IImg) {
  const baseClass = "img";
  const attrsNoClass = Object.fromEntries(
    Object.entries(attrs).filter((attr) => attr[0] !== "className"),
  );

  return (
    <>
      <img
        className={`${baseClass} ${attrs.className || ""}`}
        {...attrsNoClass}
      />
    </>
  );
}

export default Img;
