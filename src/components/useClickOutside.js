import React, { useEffect } from "react";

function useClickOutside(ref, callback) {
  function handleClick(evt) {
    if (ref.current && !ref.current.contains(evt.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })
};

export default useClickOutside;