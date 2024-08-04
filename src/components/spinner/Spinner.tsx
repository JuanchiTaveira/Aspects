import spinner from "./spinner.gif";

export const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading"
        style={{ width: "100px", margin: "auto", display: "block", paddingTop: "20%" }}
      />
    </div>
  );
};

export default Spinner;
