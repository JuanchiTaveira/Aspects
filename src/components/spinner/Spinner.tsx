import spinner from "./spinner.png";

export const Spinner = () => {
  return (
    <div className="spinner relative top-[20%]">
      <img
        src={spinner}
        alt="loading"
        className="w-[70px] m-auto block animate-spin"
      />
    </div>
  );
};

export default Spinner;
