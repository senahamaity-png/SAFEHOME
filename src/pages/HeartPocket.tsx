import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Shirt,
  Smartphone,
  MapPin,
  Lock,
  Sparkles,
} from "lucide-react";

interface HeartPocketProps {
  nextPage: () => void;
}

function HeartPocket({ nextPage }: HeartPocketProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [accessGranted, setAccessGranted] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);

    if (option === "heart") {
      setTimeout(() => {
        setAccessGranted(true);
      }, 700);
    }
  };

  return (
    <div className="heart-pocket-page">
      {/* Floating decorations */}
      <div className="floating-item item-one">🥔</div>
      <div className="floating-item item-two">❤️</div>
      <div className="floating-item item-three">🧸</div>

      {/* Mission */}
      <motion.div
        className="heart-mission"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MISSION 05 / 11
      </motion.div>

      {/* Heading */}
      <motion.div
        className="heart-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>👕</span>
        <h1>HEART POCKET</h1>
        <p>
          Every Alu needs a permanent place to stay...
          <br />
          Let's investigate. 👀
        </p>
      </motion.div>

      {/* Shirt */}
      <motion.div
        className="shirt-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="shirt"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Shirt size={90} strokeWidth={1.5} />

          <motion.div
            className="shirt-heart"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            ❤️
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Question */}
      {!accessGranted && (
        <motion.div
          className="pocket-question"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2>WHERE DOES THE ALU BELONG? 🥔</h2>
          <p>Choose carefully, Sir...</p>
        </motion.div>
      )}

      {/* Options */}
      {!accessGranted && (
        <motion.div
          className="pocket-options"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button
            className={`pocket-option ${
              selected === "phone" ? "selected" : ""
            }`}
            onClick={() => handleSelect("phone")}
          >
            <Smartphone size={25} />
            <span>PHONE 📱</span>
          </button>

          <button
            className={`pocket-option ${
              selected === "canada" ? "selected" : ""
            }`}
            onClick={() => handleSelect("canada")}
          >
            <MapPin size={25} />
            <span>CANADA 🇨🇦</span>
          </button>

          <button
            className={`pocket-option ${
              selected === "pocket" ? "selected" : ""
            }`}
            onClick={() => handleSelect("pocket")}
          >
            <Shirt size={25} />
            <span>POCKET 👕</span>
          </button>

          <button
            className={`pocket-option heart-option ${
              selected === "heart" ? "selected" : ""
            }`}
            onClick={() => handleSelect("heart")}
          >
            <Heart size={25} />
            <span>HEART ❤️</span>
          </button>
        </motion.div>
      )}

      {/* Wrong answer message */}
      <AnimatePresence>
        {selected && selected !== "heart" && !accessGranted && (
          <motion.div
            className="wrong-answer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            🤔 Hmm... nice try, Sir.
            <br />
            <span>But the Alu deserves something more permanent. 😌</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Access Granted */}
      <AnimatePresence>
        {accessGranted && (
          <motion.div
            className="access-result"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="success-heart"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            >
              ❤️
            </motion.div>

            <div className="access-title">
              <Lock size={20} />
              ACCESS GRANTED 🔓
            </div>

            <h2>PERMANENT ADDRESS FOUND</h2>

            <p className="address-text">
              Your Unique Alu 🥔 officially belongs in
            </p>

            <motion.div
              className="heart-address"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              ❤️ RAJESH'S HEART POCKET ❤️
            </motion.div>

            <div className="lease-info">
              <div>
                <span>RENT</span>
                <strong>₹0</strong>
              </div>

              <div>
                <span>LEASE</span>
                <strong>LIFETIME 😌</strong>
              </div>
            </div>

            <p className="final-note">
              <Sparkles size={16} />
              No cancellation. No return. No exchange.
              <br />
              Once Alu enters, Alu stays. 🥔❤️
            </p>

            <motion.button
              className="heart-next-btn"
              onClick={nextPage}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              NEXT MISSION 🌍
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="heart-footer">
        🥔 ALU • 🧸 VALU • ❤️ HEART POCKET
      </div>
    </div>
  );
}

export default HeartPocket;