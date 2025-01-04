import React from "react";

function InstructionModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome to KudoSpot!</h2>
        <p>
          This platform allows employees to give and receive kudos, track
          engagement, and view leaderboards. Here's how to get started:
        </p>
        <ul>
          <li>Fill out the "Give Kudos" form to appreciate your colleagues.</li>
          <li>View engagement stats to track participation and progress.</li>
          <li>Check the leaderboard to see who's receiving the most kudos.</li>
        </ul>
        <button onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
}

export default InstructionModal;
