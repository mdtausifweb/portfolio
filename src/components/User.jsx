import React, { useEffect, useState } from "react";

const User = () => {
  const [sec, setSec] = useState(0);
  const [min, setmin] = useState(0);
  const [hr, sethr] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      sec < 60 ? setSec(sec + 1) : setSec(0);
    }, 1000);
    setTimeout(() => {
      setmin(min + 1);
    }, 1000 * 60);

    setTimeout(() => {
      sethr(hr + 1);
    }, 1000 * 60 * 60);
  }, [sec, min, hr]);
  return (
    <div>
      <div>
        <span>Hour:{hr}</span>
        <span>Min:{min}</span>
        <span>Sec:{sec}</span>
      </div>
    </div>
  );
};

export default User;
