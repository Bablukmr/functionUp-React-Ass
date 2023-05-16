import { useState } from "react";
import "./removeUser.css";

export default function RemoveUser() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setListData((listData) => {
      const updatelist = [...listData, activity];
      setActivity("");
      return updatelist;
    });
  }

  function removeActivity(index) {
    const updatedListData = listData.filter((elm,id) => {
      return index !== id;
    });
    setListData(updatedListData);
  }

  return (
    <div className="mainbox">
      <h1>Add delete user functionality </h1>
      {listData !== [] &&
        listData.map((data,index) => {
          return (
            <>
              <div className='contents' key={index}>
                <h2>{data}</h2>
                <button onClick={() => removeActivity(index)}>Delete</button>
              </div>
            </>
          );
        })}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add New User"
          className="add-input"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />{" "}
      </form>
      <br />
    </div>
  );
}
