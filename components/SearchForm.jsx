import React from 'react';
import { useForm } from 'react-hook-form';

const formBorder =
  'border 1 border-black m-3 rounded-sm bg-gray-400 inline-flex';
  
const SearchForm = ({ setSearchRes, setView }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setSearchRes(data.Search);
    setView('SearchResultsContainer');
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        class={formBorder} // style={{
        //   margin: '5px',
        //   border: '1px solid black',
        //   display: 'inline-flex',
        //   background: 'silver',
        // }}
      >
        <label
          style={{
            margin: '4px',
          }}
        >
          Artist:
          <input
            {...register('Search')}
            placeholder="Search"
            style={{
              padding: '1px 1vw',
              margin: '4px',
              border: '1px solid black',
              width: '15vw',
            }}
            // class="border border-black focus:outline-none focus:ring-2 focus:red-700 focus:border-transparent"
            // type="text"
          />
          <input
            style={{
              padding: '1px 1vw',
              margin: '1px 4px',
              boxSizing: 'border-box',
              border: '1px solid grey',
            }}
            type="submit"
          />
        </label>
      </form>
    </>
  );
};
export default SearchForm;
