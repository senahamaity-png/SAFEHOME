import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Brain,
  Heart,
  Smile,
  Stethoscope,
} from "lucide-react";

interface RajeshRecoveryProps {
  nextPage: () => void;
}

function RajeshRecovery({ nextPage }: RajeshRecoveryProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const symptoms = [
    {
      id: 1,
      emoji: "💻",
      title: "Too Much Work",
      text: "Laptop refuses to leave your sight.",
    },
    {
      id: 2,
      emoji: "☕",
      title: "Coffee Dependency",
      text: "Coffee has officially become a life-support system.",
    },
    {
      id: 3,
      emoji: "😵",
      title: "Brain Overload",
      text: "Too many tabs open... including inside your brain.",
    },
    {
      id: 4,
      emoji: "📱",
      title: "Phone Checking",
      text: "Checking the phone every 2 minutes.",
    },
    {
      id: 5,
      emoji: "🥔",
      title: "Alu Deficiency",
      text: "Not enough Alu in your daily routine.",
    },
  ];

  const toggleSymptom = (id: number) => {
    setSelectedSymptoms((previous) => {
      if (previous.includes(id)) {
        return previous.filter((item) => item !== id);
      }

      return [...previous, id];
    });

    setShowResult(false);
  };

  const allSelected = selectedSymptoms.length === symptoms.length;

  const checkPatient = () => {
    if (allSelected) {
      setShowResult(true);
    }
  };

  return (
    <div className="recovery-page">

      {/* Floating decorations */}
      <div className="recovery-float recovery-one">🚑</div>
      <div className="recovery-float recovery-two">❤️</div>
      <div className="recovery-float recovery-three">🧸</div>

      {/* Mission */}
      <motion.div
        className="recovery-mission"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MISSION 09 / 11
      </motion.div>

      {/* Heading */}
      <motion.div
        className="recovery-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Stethoscope size={38} />

        <h1>RAJESH RECOVERY CENTER</h1>

        <p>
          Emergency department for overworked Sir.
          <br />
          Please select all detected symptoms. 😂
        </p>
      </motion.div>

      {/* Patient Card */}
      <motion.div
        className="patient-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="patient-icon">
          🧑‍💻
        </div>

        <div>
          <span>PATIENT</span>
          <h2>RAJESH</h2>
        </div>

        <div className="patient-status">
          <Activity size={16} />
          UNDER OBSERVATION
        </div>
      </motion.div>

      {/* Symptoms */}
      <div className="symptom-title">
        🔎 SYMPTOM CHECK
      </div>

      <motion.div
        className="symptom-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {symptoms.map((symptom) => {
          const selected = selectedSymptoms.includes(symptom.id);

          return (
            <motion.button
              key={symptom.id}
              className={`symptom-card ${
                selected ? "symptom-selected" : ""
              }`}
              onClick={() => toggleSymptom(symptom.id)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="symptom-emoji">
                {symptom.emoji}
              </div>

              <div className="symptom-content">
                <h3>{symptom.title}</h3>

                <p>{symptom.text}</p>
              </div>

              <div className="symptom-check">
                {selected ? "✓" : ""}
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Counter */}
      <div className="symptom-counter">
        SYMPTOMS DETECTED:{" "}
        <strong>
          {selectedSymptoms.length} / {symptoms.length}
        </strong>
      </div>

      {/* Check Button */}
      <motion.button
        className={`diagnose-btn ${
          allSelected ? "diagnose-active" : ""
        }`}
        onClick={checkPatient}
        disabled={!allSelected}
        whileHover={allSelected ? { scale: 1.05 } : {}}
        whileTap={allSelected ? { scale: 0.96 } : {}}
      >
        <Stethoscope size={17} />

        {allSelected
          ? "RUN FINAL DIAGNOSIS 🩺"
          : "SELECT ALL SYMPTOMS"}
      </motion.button>

      {/* Result */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            className="diagnosis-result"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
          >
            <div className="diagnosis-top">
              <Heart size={20} />
              DIAGNOSIS COMPLETE
            </div>

            <div className="diagnosis-main">
              <Brain size={30} />

              <h2>
                SEVERE CASE OF
                <br />
                WORK PRESSURE 😂
              </h2>
            </div>

            <p>
              Fortunately, the condition is completely
              recoverable.
            </p>

            <div className="prescription">
              <div>
                ☕ <span>1 Coffee Break</span>
              </div>

              <div>
                😂 <span>3 Random Smiles</span>
              </div>

              <div>
                🥔 <span>Unlimited Alu Dose</span>
              </div>

              <div>
                🧸 <span>Mandatory Rest</span>
              </div>
            </div>

            <div className="doctor-note">
              <Smile size={17} />

              Doctor's note:
              <span>
                Sir is advised to stop working for at least
                2 minutes. 😂
              </span>
            </div>

            <motion.button
              className="recovery-next-btn"
              onClick={nextPage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              NEXT: SECRET CODE 🔐
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="recovery-footer">
        🚑 RAJESH RECOVERY CENTER • ALU APPROVED 🥔
      </div>

    </div>
  );
}

export default RajeshRecovery;