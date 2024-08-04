import spinner from "./spinner.gif";

export const Spinner = () => {
  return (
    <div className="spinner relative top-[20%]">
      <img
        src={spinner}
        alt="loading"
        className="w-[100px] m-auto block"
      />
    </div>
  );
};

export default Spinner;
