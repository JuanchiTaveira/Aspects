import spinner from "./spinner.gif";

export const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading"
        className="w-[100px] m-auto block md:pt-[20%] pt-[40%]"
      />
    </div>
  );
};

export default Spinner;
