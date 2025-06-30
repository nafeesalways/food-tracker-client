import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { use } from "react";
import { Helmet } from "react-helmet-async";

const MyItems = () => {
  const { user } = use(AuthContext);
  const [myItems, setMyItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    axios
      .get(`https://food-tracker-server.vercel.app/foods?userEmail=${user.email}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setMyItems(res.data))
      .catch((err) => console.error(err));
  }, [user]);

  const handleDelete = (id) => {
    axios.delete(`https://food-tracker-server.vercel.app/foods/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Food item deleted");
        setMyItems(myItems.filter((item) => item._id !== id));
        setShowDeleteModal(false);
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedItem = {
      name: form.name.value,
      quantity: form.quantity.value,
      expiryDate: new Date(form.expiryDate.value),
      description: form.description.value,
    };

    axios
      .put(`https://food-tracker-server.vercel.app/foods/${selectedItem._id}`, updatedItem)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Item updated");
          const updatedList = myItems.map((item) =>
            item._id === selectedItem._id ? { ...item, ...updatedItem } : item
          );
          setMyItems(updatedList);
          setShowUpdateModal(false);
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <Helmet>
        <title>FreshKeep | MyItems</title>
      </Helmet>
      <h2 className="text-2xl text-center font-bold mb-6 text-green-500">My Food Items</h2>
      <div className="overflow-x-auto">
        <table className="table  border">
          <thead>
            <tr className="bg-gray-100 text-green-500">
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myItems.map((item, index) => (
              <tr key={item._id}>
                <td className="text-black">{index + 1}</td>
                <td className="text-black">{item.name}</td>
                <td className="text-black">{item.category}</td>
                <td className="text-black">{item.quantity}</td>
                <td className="text-black">{new Date(item.expiryDate).toLocaleDateString()}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setShowUpdateModal(true);
                    }}
                    className="btn btn-sm btn-warning"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setShowDeleteModal(true);
                    }}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {showUpdateModal && selectedItem && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Update Food Info</h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                name="name"
                defaultValue={selectedItem.name}
                className="input input-bordered w-full"
              />
              <input
                name="quantity"
                defaultValue={selectedItem.quantity}
                className="input input-bordered w-full"
              />
              <input
                type="date"
                name="expiryDate"
                defaultValue={
                  new Date(selectedItem.expiryDate).toISOString().split("T")[0]
                }
                className="input input-bordered w-full"
              />
              <textarea
                name="description"
                defaultValue={selectedItem.description}
                className="textarea textarea-bordered w-full"
              ></textarea>
              <div className="modal-action">
                <button type="submit" className="btn btn-success">
                  Save Changes
                </button>
                <button
                  onClick={() => setShowUpdateModal(false)}
                  className="btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedItem && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Are you sure you want to delete "{selectedItem.name}"?
            </h3>
            <div className="modal-action">
              <button
                onClick={() => handleDelete(selectedItem._id)}
                className="btn btn-error"
              >
                Yes, Delete
              </button>
              <button onClick={() => setShowDeleteModal(false)} className="btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyItems;
