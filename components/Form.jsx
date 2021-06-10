import React from 'react';
import { useForm } from 'react-hook-form';

const formBorder =
  'border 1 border-black m-3 p-3 rounded-sm bg-gray-400 flex-medium ';

const Form = ({ setTattooStyle, setView }) => {
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
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setTattooStyle(data.category);
    setView('StylesCont');
  };

  return (
    <div class={formBorder}>
      <form class="space-y-1 space-x-1" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Choose a style:
        </label>
        <select class="p-0.5 w-auto" {...register('category')}>
          {tattooStyles.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <input class="w-full lg:w-auto" type="submit" />
      </form>
    </div>
  );
};
export default Form;
