import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Loader from "./Loader";


const Countdown = ({ expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

 useEffect(() => {
  const updateCountdown = () => {
    const now = new Date();
    const distance = new Date(expiryDate) - now;

    if (distance <= 0) {
      setTimeLeft("Expired");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    setTimeLeft(`${days}d ${hours}h ${minutes}m`);
  };

  updateCountdown(); // Initial call
  const interval = setInterval(updateCountdown, 60000);
  return () => clearInterval(interval);
}, [expiryDate]);


  return <span className="text-red-600 font-semibold">Expires in: {timeLeft}</span>;
};

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch food item
    axios.get(`https://food-tracker-server.vercel.app/foods/${id}`).then((res) => {
      setFood(res.data);
    });

    // Fetch notes
    axios.get(`https://food-tracker-server.vercel.app/notes/${id}`).then((res) => {
      setNotes(res.data);
    });
  }, [id]);

  const handleAddNote = (e) => {
    e.preventDefault();
    const note = {
      foodId: id,
      userEmail: user.email,
      noteText,
    };

    axios.post("https://food-tracker-server.vercel.app/notes", note).then((res) => {
      if (res.data.insertedId) {
        toast.success("Note added successfully");
        setNotes([...notes, { ...note, noteDate: new Date() }]);
        setNoteText("");
      }
    });
  };

  if (!food) return <Loader></Loader>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={food.image} alt={food.name} className="w-60 h-60 object-cover rounded-lg" />
        <div>
          <h2 className="text-2xl font-bold">{food.name}</h2>
          <p><span className="font-semibold">Category:</span> {food.category}</p>
          <p><span className="font-semibold">Quantity:</span> {food.quantity}</p>
          <p><span className="font-semibold">Expiry Date:</span> {new Date(food.expiryDate).toDateString()}</p>
          <p className="mt-2 text-gray-600">{food.description}</p>
          <div className="mt-2">
            <Countdown expiryDate={food.expiryDate} />
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Add Note</h3>
        {user && food?.userEmail === user?.email ? (
          <form onSubmit={handleAddNote} className="space-y-3">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Write your note..."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="btn hover:bg-black text-black hover:text-white w-full">Add Note</button>
          </form>
        ) : (
          <div>
            <textarea
              disabled
              className="textarea textarea-bordered w-full"
              placeholder="Only the food owner can add a note"
            ></textarea>
            <p className="text-sm text-red-500 mt-1">You are not allowed to add a note for this item.</p>
          </div>
        )}
      </div>

      {/* Display Notes */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Notes</h3>
        {notes.length > 0 ? (
          <ul className="space-y-2">
            {notes.map((note, index) => (
              <li key={index} className="p-3 bg-gray-100 rounded-md">
                <p>{note.noteText}</p>
                <p className="text-sm text-gray-500 mt-1">Posted on: {new Date(note.noteDate).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No notes added yet.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
