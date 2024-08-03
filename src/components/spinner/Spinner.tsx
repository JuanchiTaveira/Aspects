import spinner from "./spinner.gif"; //TODO: change spinner gif

export const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading"
        style={{ width: "100px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
