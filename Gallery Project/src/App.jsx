import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";


const App = () => {
  const [userdata, setUserdata] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=28`,
    );
    setUserdata(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printPage = <h3 className=" text-sm absolute top-1/2 left-1/2 -translate-x-1/2  font-semibold">Loading...</h3>;

  if (userdata.length > 0) {
    printPage = userdata.map((el, idx) => {
      return (
        <div key={idx}>
          <Card data={el}/>
        </div>
      );
    });
  }

  return (
    <div className="h-screen overflow-auto p-4">
      <div className="flex flex-wrap gap-3">{printPage}</div>

      <div className="flex items-center justify-center ">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserdata([]);
            }
          }}
          className="bg-yellow-300 mb-3 active:scale-95 cursor-pointer text-black px-5 py-2 m-2 rounded-2xl font-bold"
        >
          Prev
        </button>

        <h4> Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserdata([]);
          }}
          className="bg-amber-300 mb-3 active:scale-95 cursor-pointer text-black px-5 py-2 m-2 rounded-2xl font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
