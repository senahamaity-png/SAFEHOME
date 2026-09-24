
import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Heart } from "lucide-react";

interface WelcomeProps {
  nextPage: () => void;
}

function Welcome({ nextPage }: WelcomeProps) {
  const [showMessage, setShowMessage] = useState(false);

  const handleEnter = () => {
    setShowMessage(true);

    setTimeout(() => {
      nextPage();
    }, 1500);
  };

  return (
    <div className="welcome-page">

      {/* Floating decorations */}
      <motion.div
        className="floating-item potato"
        animate={{
          y: [0, -15, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        🥔
      </motion.div>

      <motion.div
        className="floating-item teddy"
        animate={{
          y: [0, 12, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        🧸
      </motion.div>

      <motion.div
        className="floating-item heart"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ❤️
      </motion.div>

      <motion.div
        className="welcome-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Top badge */}
        <div className="secret-badge">
          <ShieldCheck size={18} />
          <span>TOP SECRET WEBSITE</span>
        </div>

        {/* Sparkle */}
        <motion.div
          className="sparkle-icon"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Sparkles size={28} />
        </motion.div>

        <p className="small-greeting">
          Hi Sir 👋
        </p>

        <h1>
          Hello Sir 😌
        </h1>

        <p className="welcome-subtitle">
          Welcome to a highly confidential website
          specially prepared for one particular human.
        </p>

        {/* Funny notice */}
        <div className="funny-notice">
          <div className="notice-icon">
            👀
          </div>

          <div>
            <strong>
              WAIT... WHO ARE YOU?
            </strong>

            <p>
              This website contains dangerous amounts
              of cuteness, potatoes and teddy bears.
            </p>
          </div>
        </div>

        {/* Identity box */}
        <div className="identity-box">

          <p className="question-label">
            IDENTITY VERIFICATION
          </p>

          <h2>
            Are you Rajesh?
          </h2>

          <p>
            The one and only Sir? 😎
          </p>

          <button
            className="enter-btn"
            onClick={handleEnter}
          >
            <Heart size={18} fill="currentColor" />
            YES, THAT'S ME ❤️
          </button>

          {!showMessage && (
            <p className="tiny-warning">
              ⚠️ Wrong answers will be investigated.
            </p>
          )}

          {showMessage && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span>🎉</span>

              <strong>
                IDENTITY CONFIRMED!
              </strong>

              <p>
                Okay Sir... you may enter. 😌
              </p>
            </motion.div>
          )}

        </div>

        {/* Bottom */}
        <div className="welcome-footer">
          <span>🥔 Alu approved</span>
          <span>•</span>
          <span>🧸 Valu approved</span>
          <span>•</span>
          <span>❤️ Love verified</span>
        </div>

      </motion.div>
    </div>
  );
}

export default Welcome;
