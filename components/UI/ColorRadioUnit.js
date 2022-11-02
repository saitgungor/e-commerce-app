const ColorRadioUnit = props => {
  return (
    <div className="form-check form-check-inline">
      <input
        style={{ backgroundColor: `${props.hex}`, ringColor: `${props.hex}` }}
        className={`appearance-none rounded-full h-4 w-4 border border-gray-300 checked:ring-1 ring-offset-1 focus:outline-none mt-1 mr-2 cursor-pointer`}
        type="radio"
        name="inlineRadioOptions"
        id={`${props.hex}`}
        value={`${props.hex}`}
      />
      <label
        className="form-check-label inline-block text-gray-800"
        htmlFor={`${props.hex}`}
      ></label>
    </div>
  );
};
export default ColorRadioUnit;
