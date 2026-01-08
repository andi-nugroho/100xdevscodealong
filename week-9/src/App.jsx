import React, { useEffect, useState } from 'react';
// import useDebounce from './useDebounce';

function useDebounce(inputValue,timeout){
  const [debouncedValue,setDebouncedValue] = useState(inputValue);
  useEffect(()=>{
    const timeID = setTimeout(()=>{
      setDebouncedValue(inputValue);
    },timeout);
    return ()=>{
      clearTimeout(timeID);
    }
  },[inputValue,timeout])
  return debouncedValue;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
  useEffect(()=>{
    fetch("")
  },[debouncedValue])
  return (
    <>
    debouncedValue is {debouncedValue}
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </>
  );
};

export default SearchBar;