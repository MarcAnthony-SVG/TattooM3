import React from 'react';
import { useForm } from 'react-hook-form';

const SearchForm = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Artist:
          <input name="artist" placeholder="Search Artist" ref={register} type="text" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
export default SearchForm;
