import Form from './Form';
import SearchForm from './SearchForm';
import { withApollo } from '../libs/Apollo';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SearchBar = ({ setSearchRes, setTattooStyle, setView }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const selectBtn = 'border-2 border-black p-0.5 h-7 rounded-md';

  return (
    <div className="search-container">
      <SearchForm setSearchRes={setSearchRes} setView={setView}/>
      <Form setTattooStyle={setTattooStyle} setView={setView}/>
      <style jsx>{`
        .search-container {
          display: flex;
          justify-content: center;
          border: solid 1px black;
          position: relative;
          height: 50%;
        }
        .form-style {
          margin: auto;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default withApollo(SearchBar);

/*
 <div>
        <SearchForm
          setArtist={props.setArtist}
          onSubmit={props.onSubmit}
        ></SearchForm>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            margin: '5px',
            border: '1px solid black',
            display: 'inline-flex',
            background: 'silver',
          }}
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
              class="border border-black focus:outline-none focus:ring-2 focus:red-700 focus:border-transparent"
              type="text"
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
      </div> 
*/
