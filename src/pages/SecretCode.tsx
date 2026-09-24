import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, KeyRound, Sparkles, Heart } from "lucide-react";

interface SecretCodeProps {
  nextPage: () => void;
}

function SecretCode({ nextPage }: SecretCodeProps) {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [wrong, setWrong] = useState(false);

  const secretCode = "731";

  const handleNumber = (number: string) => {
    if (code.length < 3) {
      setCode((previous) => previous + number);
      setWrong(false);
    }
  };

  const clearCode = () => {
    setCode("");
    setWrong(false);
  };

  const checkCode = () => {
    if (code === secretCode) {
      setUnlocked(true);
      setWrong(false);
    } else {
      setWrong(true);
      setCode("");
    }
  };

  return (
    <div className="secret-code-page">

      {/* Floating decorations */}
      <div className="secret-float secret-one">🔐</div>
      <div className="secret-float secret-two">❤️</div>
      <div className="secret-float secret-three">✨</div>

      {/* Mission */}
      <motion.div
        className="secret-mission"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MISSION 10 / 11
      </motion.div>

      {/* Heading */}
      <motion.div
        className="secret-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {unlocked ? (
          <Unlock size={38} />
        ) : (
          <Lock size={38} />
        )}

        <h1>SECRET CODE</h1>

        <p>
          One final lock before the last mission.
          <br />
          Can Sir crack the code? 👀
        </p>
      </motion.div>

      {!unlocked && (
        <motion.div
          className="code-box"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >

          <div className="key-icon">
            <KeyRound size={25} />
          </div>

          <div className="code-label">
            ENTER 3-DIGIT SECRET CODE
          </div>

          {/* Code display */}
          <div className="code-display">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`code-dot ${
                  code.length > index ? "code-dot-filled" : ""
                }`}
              >
                {code.length > index ? "●" : "○"}
              </div>
            ))}
          </div>

          {/* Hint */}
          <div className="code-hint">
            💡 HINT
            <span>
              7 • 3 • 1 — Three numbers are hiding in plain sight. 👀
            </span>
          </div>

          {/* Number pad */}
          <div className="number-pad">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(
              (number) => (
                <motion.button
                  key={number}
                  onClick={() => handleNumber(number)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                >
                  {number}
                </motion.button>
              )
            )}

            <motion.button
              className="clear-number"
              onClick={clearCode}
              whileTap={{ scale: 0.92 }}
            >
              CLEAR
            </motion.button>

            <motion.button
              onClick={() => handleNumber("0")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
            >
              0
            </motion.button>

            <motion.button
              className="enter-number"
              onClick={checkCode}
              disabled={code.length !== 3}
              whileTap={{ scale: 0.92 }}
            >
              ENTER
            </motion.button>
          </div>

          {/* Wrong code */}
          <AnimatePresence>
            {wrong && (
              <motion.div
                className="wrong-code"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ❌ WRONG CODE
                <span>
                  Nice try, Sir. The secret lock is still closed. 😂
                </span>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      )}

      {/* Unlocked */}
      <AnimatePresence>
        {unlocked && (
          <motion.div
            className="secret-unlocked"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <motion.div
              className="unlock-icon"
              animate={{
                rotate: [0, -10, 10, -5, 5, 0],
              }}
              transition={{
                duration: 0.8,
              }}
            >
              🔓
            </motion.div>

            <div className="unlock-title">
              <Sparkles size={18} />
              ACCESS GRANTED
            </div>

            <h2>
              SECRET FOUND ❤️
            </h2>

            <div className="secret-message">
              <Heart size={19} />

              <p>
                You found the code...
                <br />
                but the real secret was never the numbers.
              </p>

              <strong>
                It was the little world
                we created along the way. 🥔🧸❤️
              </strong>
            </div>

            <div className="code-final-note">
              🔐 CLASSIFICATION:
              <span>
                TOO SPECIAL TO SHARE
              </span>
            </div>

            <motion.button
              className="final-mission-btn"
              onClick={nextPage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              OPEN FINAL MISSION ❤️
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="secret-footer">
        🔐 CODE 731 • ALU APPROVED 🥔
      </div>

    </div>
  );
}

export default SecretCode;