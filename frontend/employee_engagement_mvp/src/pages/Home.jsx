import React, { useState } from "react";
import GiveKudosForm from "../components/GiveKudosForm";
import EngagementStats from "../components/EngagementStats";
import Leaderboard from "../components/Leaderboard";
import EngagementPieChart from "../components/EngagementPieChart";
import InstructionModal from "../components/InstructionModal";

function Home() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false); // Close the modal when the user clicks "Got it!"
  };

  return (
    <div>
      <header className="text-center mt-4 mb-5">
        <h1 className="text-success">KudoSpot</h1>
        <p className="lead">Employee Engagement Platform</p>
      </header>

      {/* Show modal if showModal state is true */}
      <InstructionModal show={showModal} onClose={closeModal} />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <GiveKudosForm />
          </div>
          {/* <div className="col-lg-6 ">
          <EngagementPieChart />
          </div> */}
        </div>
        <div className="row">
          <div className="col-lg-6 ">
            <EngagementStats />
          </div>
          <div className="col-lg-6">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
