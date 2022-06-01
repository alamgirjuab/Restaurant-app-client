import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { saveAs } from "file-saver";
import { useCart } from "react-use-cart";

const Invoice = () => {
  const { addItem } = useCart();
  const [orderedItems, setOrderedItems] = useState([]);
  // console.log(cartData.items);

  // useEffect(() => {
  //     fetch(cartData.items)
  //         .then(res => res.json())
  //         .then(data => setOrderedItems(data))
  // }, [])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("react-use-cart"));
    if (items) {
      setOrderedItems(items);
    }
  }, [addItem]);

  const pdfGen = (data) => {
    axios
      .post("http://localhost:5000/create-pdf", data)
      .then(() =>
        axios.get("http://localhost:5000/fetch-pdf", {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "invoice.pdf");
      });
  };

  // console.log(orderedItems);
  return (
    <div className="container">
      <div className="text-center">
        <h4>Invoice</h4>
        <h3>ThumbStack Restaurant</h3>
        <p>Pabna, Dhaka, Bangladesh</p>
        <p>
          <strong>Mobile no:</strong> +880 1822 77 35 41
        </p>
      </div>
      <div className="d-flex justify-content-around">
        <p>
          Invoice No:<strong>10</strong>
        </p>
        <p>Date : </p>
      </div>
      <div>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Qty.</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orderedItems?.items?.map((singleItem) => (
              <tr key={singleItem._id}>
                <td>
                  {orderedItems?.items?.forEach((singleItem, index) => {
                    singleItem._id = index + 1;
                  })}
                </td>
                <td>{singleItem.name}</td>
                <td>{singleItem.quantity}</td>
                <td>{singleItem.price}</td>
                <td>{singleItem.itemTotal}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={4} className="text-end pe-3">
                Sub-Total :
              </td>
              <td>${orderedItems.cartTotal}</td>
            </tr>
            <tr>
              <td colSpan={4} className="text-end pe-3">
                Tips (10%) :
              </td>
              <td>${orderedItems.cartTotal / 10}</td>
            </tr>
            <tr>
              <td colSpan={4} className="text-end pe-3">
                Total :
              </td>
              <td>${orderedItems.cartTotal / 10 + orderedItems.cartTotal}</td>
            </tr>
          </tbody>

          {/* <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="text-end pe-3">Sub-Total :</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="text-end pe-3">Tips (10%) :</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="text-end pe-3">Total :</td>
                            <td>$100</td>
                        </tr>
                    </tbody> */}
        </Table>
        <div className="text-center my-5">
          <button
            onClick={() => pdfGen(orderedItems)}
            className="btn btn-primary m-2"
          >
            Download Invoice
          </button>
          <h4>Thank you, visit again</h4>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
