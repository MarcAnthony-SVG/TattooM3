import React from 'react';
import { useForm } from 'react-hook-form';

const Form = (props) => {
  const [tattooStyles] = React.useState([
    { value: 'Traditional', label: 'Traditional' },
    { value: 'Realism ', label: 'Realism' },
    { value: 'Watercolor', label: 'Watercolor' },
    { value: ' Tribal', label: 'Tribal' },
    { value: 'New School ', label: 'New School' },
    { value: ' Neo Traditional', label: 'Neo Traditional' },
    { value: 'Japanese ', label: 'Japanese' },
    { value: ' Illustrative', label: 'Illustrative' },
    { value: ' Chicano', label: 'Chicano' },
    { value: 'Abstract ', label: 'Abstract' },
    { value: 'Trash Polka ', label: 'Trash Polka' },
    { value: 'Blackwork', label: 'Blackwork' },
    { value: ' Greywash', label: 'Greywash' },
    { value: ' Negative Space', label: 'Negative Space' },
    { value: 'Silhouette ', label: 'Silhouette' },
    { value: 'Brushstroke ', label: 'Brushstroke' },
    { value: ' Dotwork', label: 'Dotwork' },
    { value: ' Pointillism', label: 'Pointillism' },
    { value: ' Geometric', label: 'Geometric' },
    { value: 'Polygon ', label: 'Polygon' },
    { value: ' Ornamental', label: 'Ornamental' },
    { value: 'Glitch ', label: 'Glitch' },
    { value: 'Graffiti ', label: 'Graffiti' },
  ]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log('FORMS', data.style);
    props.setTattooStyle(data.style);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Choose a style: </label>
        <select ref={register} name="style" value={props.tattooStyle}>
          {tattooStyles.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <input type="submit" tattoostyle="Submit" />
      </form>
    </div>
  );
};
export default Form;
