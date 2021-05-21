import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames";
// import { toast } from "react-toastify";
import { MdClose, MdReplay } from "react-icons/md";
import AddItem from "./AddItem";

function Homebd() {
  const [groceryiData, updateGroceryData] = useState([]);
  const API_Base_URL = "https://sheltered-scrubland-78753.herokuapp.com";
  //`${API_Base_URL}/grocery/getData`;

  async function fetchGroceryItems() {
    const groceryItem = await axios.get(`${API_Base_URL}/grocery/getData`);
    const apiDataArray = groceryItem.data.result;
    console.log("API data!!!!!!!!", groceryItem);
    updateGroceryData(apiDataArray);
  }

  useEffect(() => {
    fetchGroceryItems();
  }, []);

  //update function
  async function updateItem(item) {
    await axios.put(`${API_Base_URL}/grocery/updateData`, {
      _id: item._id,
      isPurchased: true,
    });

    fetchGroceryItems();
  }

  //deleting function
  async function deleteItem(item) {
    await axios.delete(`${API_Base_URL}/grocery/deleteData`, {
      data: {
        //specially for delete function we have to add data object
        _id: item._id,
      },
    });
    // toast.error("Item deleted");
    fetchGroceryItems();
  }
  //readding function updating isPurchased to false
  async function readdItem(item) {
    await axios.put(`${API_Base_URL}/grocery/updateData`, {
      _id: item._id,
      isPurchased: false,
    });

    fetchGroceryItems();
  }

  function renderGroceryItems() {
    return groceryiData.map((item) => {
      return (
        <div id="one" className="row" key={item._id}>
          <div className="col-6 d-flex align-items-center">
            {/* Conditional (ternary) operator */}
            <p
              className={classNames("m-0", {
                purchased: item.isPurchased === true,
              })}
            >
              {item.itemname}
            </p>
          </div>

          <div className="col-6">
            {item.isPurchased === false ? (
              <button
                type="button"
                className="btn btn-outline-primary p-1 tran-slo  btn-light"
                onClick={() => updateItem(item)}
              >
                purched
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-success p-1 tran-slo  btn-light ms-5"
                onClick={() => readdItem(item)}
              >
                <MdReplay />
              </button>
            )}

            <button
              type="button"
              className="btn btn-outline-danger mx-1 p-1 tran-slo btn-light"
              onClick={() => deleteItem(item)}
            >
              <MdClose />
            </button>
          </div>
        </div>
      );
    });
  }

  let date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  return (
    <div className="d-flex justify-content-center homebody">
      <div className="bodyApp">
        <div
          id="first"
          className="d-flex aling-items-center justify-content-center cardmain"
        >
          <div className="d-flex justify-content-center aling-items-center">
            <p className="monthtxt">Plan For Month of {month}</p>
          </div>
        </div>
        <div id="second" className="cardmain">
          <AddItem
            base_url={API_Base_URL}
            fetchGroceryItems={fetchGroceryItems}
          />
          {renderGroceryItems()}
        </div>
      </div>
    </div>
  );
}

export default Homebd;
