import  { useState } from "react";
import axios from "axios";

function GiveKudosForm() {
  const [giver, setGiver] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  // const [username,setUsername]=useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/kudos", {
        giver,
        receiver,
        message,
      });
      setSuccess("Kudos given successfully!");
      setError(null);
      setGiver("");
      setReceiver("");
      setMessage("");
    } catch (err) {
      setError("Error giving kudos.");
      setSuccess(null);
    }
  };

  return (
    <div className="card mt-4 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">Give Kudos</h2>
        <form onSubmit={handleSubmit} >
       
          <div className="mb-3">
            <label className="form-label">Giver ID</label>
            <input
              type="text"
              className="form-control"
              value={giver}
              onChange={(e) => setGiver(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Receiver ID</label>
            <input
              type="text"
              className="form-control"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark text-white fs-4 fw-bold w-100">Give Kudos</button>
        </form>
        {success && <p className="text-success mt-3">{success}</p>}
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </div>
  );
}


export default GiveKudosForm;
