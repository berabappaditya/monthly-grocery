import React from "react";
import { useState } from "react";
import axios from "axios";

import { FaPlus } from "react-icons/fa";
//toast motification
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

//toast configuration
toast.configure();

///keypress handler
// function useKey(key, cb) {
//   const callbackRef = useRef(cb);

//   useEffect(() => {
//     callbackRef.current = cb;
//   });
//   useEffect(() => {
//     function handle(event) {
//       if (event.code === key) {
//         callbackRef.current(event);
//       }
//     }
//     document.addEventListener("keypress", handle);

//     return () => document.removeEventListener("keypress", handle);
//   }, [key]);
// }

///main function
function AddItem({ base_url, fetchGroceryItems }) {
  const [itemData, updateItemData] = useState(" ");

  async function createItem() {
    const sendTask = await axios.post(`${base_url}/grocery/postData`, {
      itemname: itemData,
      isPurchased: false,
    });

    console.log(sendTask);
    updateItemData("");
    fetchGroceryItems();
  }
  //handle key press event
  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      console.log("enter press here! ");
      createItem();
    }
  };

  // function handleEnter() {
  //   console.log("!!!!!!!!!!!!!Aditya well done!!!!!!!!!!");
  //   createItem();
  //   toast("Item created");
  // }

  // useKey("Enter", handleEnter);

  return (
    <div>
      <form className="mb-2 text-info border-0 row">
        <div className="form-group col-10 m-0 p-0">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Add a item"
            value={itemData}
            onChange={(event) => updateItemData(event.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
            required
          />
        </div>
        <div className="input-group-append col-2 m-0 p-0">
          <button
            className="btn btn-outline-primary tran-slo"
            type="button"
            onClick={() => createItem()}
          >
            <FaPlus />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
