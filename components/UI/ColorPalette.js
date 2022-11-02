import ColorRadioUnit from './ColorRadioUnit';

const ColorPalette = props => {
  return (
    <div
      className="flex h-4"
      onChange={event => props.changeColor(event.target.value)}
    >
      {props.colors.map(color => {
        return <ColorRadioUnit hex={color.hex} key={color.name} />;
      })}
    </div>
  );
};
export default ColorPalette;
