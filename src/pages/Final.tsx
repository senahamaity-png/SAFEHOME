
import { motion } from "framer-motion";
import { Heart, Sparkles, MapPin, Coffee } from "lucide-react";

interface FinalProps {
  nextPage: () => void;
}

function Final({ nextPage }: FinalProps) {
  return (
    <div className="final-page">
      <div className="final-float final-one">🥔</div>
      <div className="final-float final-two">🧸</div>
      <div className="final-float final-three">❤️</div>
      <div className="final-float final-four">✨</div>

      <motion.div
        className="final-mission"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MISSION 11 / 11
      </motion.div>

      <motion.div
        className="final-heart"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ❤️
        </motion.div>
      </motion.div>

      <motion.div
        className="final-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Sparkles size={22} />

        <h1>MISSION COMPLETE</h1>

        <p>You made it all the way here, Sir. ❤️</p>
      </motion.div>

      <motion.div
        className="final-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="final-card-top">
          <Heart size={18} />
          A LITTLE SOMETHING FOR YOU
        </div>

        <p className="final-message">
          This whole little website was made for one simple reason...
        </p>

        <h2>TO MAKE YOU SMILE. 😊</h2>

        <p className="final-message">
          Because sometimes work gets too much,
          days get too busy and everything feels like
          another task on the list.
        </p>

        <p className="final-message">
          So for the next two minutes,
          forget the work.
          Forget the pressure.
          Just smile. ❤️
        </p>

        <div className="final-divider">
          ❤️ • 🥔 • 🧸 • ❤️
        </div>

        <p className="final-special">
          And if you ever need a little reminder...
          <br />
          your Alu is always somewhere around. 🥔
        </p>
      </motion.div>

      <motion.div
        className="final-connection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className="final-place">
          <span>🇮🇳</span>
          <strong>INDIA</strong>
          <small>SNEHA</small>
        </div>

        <div className="final-line">
          <div className="final-line-heart">❤️</div>
        </div>

        <div className="final-place">
          <span>🇨🇦</span>
          <strong>CANADA</strong>
          <small>RAJESH</small>
        </div>
      </motion.div>

      <motion.div
        className="final-prescription"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <Coffee size={17} />

        <span>
          PRESCRIPTION: 2 MINUTES OF PEACE + 1 SMILE
        </span>
      </motion.div>

      <motion.div
        className="final-bottom-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <MapPin size={16} />

        Different places.
        <br />
        Same little world. ❤️
      </motion.div>

      <motion.div
        className="mission-complete-badge"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, type: "spring" }}
      >
        ✨ WEBSITE STATUS: COMPLETE ✨
      </motion.div>

      {/* NEXT SECRET BUTTON */}
      <motion.button
        className="blink-next-btn"
        onClick={nextPage}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        ONE LAST SECRET ✨
      </motion.button>

      <div className="final-footer">
        Made with ❤️ by your Unique Alu 🥔
      </div>
    </div>
  );
}

export default Final;
