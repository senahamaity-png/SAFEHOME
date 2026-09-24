
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Eye, RotateCcw, X } from "lucide-react";

function BlinkReset() {
    
  const [selected, setSelected] = useState<"blink" | "reset" | null>(null);

  return (
    <div className="blink-reset-page">
      <div className="blink-float blink-float-one">✨</div>
      <div className="blink-float blink-float-two">❤️</div>
      <div className="blink-float blink-float-three">🌙</div>
      <div className="blink-float blink-float-four">🥔</div>

      <motion.div
        className="blink-reset-label"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ONE LAST LITTLE SECRET
      </motion.div>

      <motion.div
        className="blink-reset-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Sparkles size={25} />

        <h1>BLINK 11 • RESET 31</h1>

        <p>
          Two little words.
          <br />
          Two hidden meanings.
          <br />
          One very special bond. ❤️
        </p>
      </motion.div>

      <motion.div
        className="blink-reset-cards"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* BLINK 11 */}
        <motion.button
          className="meaning-card"
          onClick={() => setSelected("blink")}
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="meaning-icon blink-icon">
            <Eye size={30} />
          </div>

          <div className="meaning-code">BLINK 11</div>

          <h2>I MISS YOU RIGHT NOW 💗</h2>

          <p>
            That little moment when you suddenly
            think of someone special and wish
            they were around.
          </p>

          <span>TAP TO DISCOVER ✨</span>
        </motion.button>

        {/* RESET 31 */}
        <motion.button
          className="meaning-card"
          onClick={() => setSelected("reset")}
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="meaning-icon reset-icon">
            <RotateCcw size={30} />
          </div>

          <div className="meaning-code">RESET 31</div>

          <h2>YOU ARE MY SAFE PLACE ❤️</h2>

          <p>
            The person who makes bad days lighter,
            problems smaller, and everything feel
            a little more like home.
          </p>

          <span>TAP TO DISCOVER ✨</span>
        </motion.button>
      </motion.div>

      <motion.div
        className="blink-reset-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Heart size={17} />

        <p>
          Some bonds are called friendship...
          <br />
          but feel a little more special. ❤️
        </p>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="meaning-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="meaning-modal"
              initial={{ opacity: 0, scale: 0.8, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="meaning-close"
                onClick={() => setSelected(null)}
              >
                <X size={19} />
              </button>

              {selected === "blink" ? (
                <>
                  <div className="modal-meaning-icon blink-icon">
                    👁️
                  </div>

                  <div className="modal-code">BLINK 11</div>

                  <h2>I MISS YOU RIGHT NOW 💗</h2>

                  <p>
                    Sometimes, in the middle of a busy day,
                    one person suddenly comes to mind.
                  </p>

                  <p>
                    You smile, pause for a second and think,
                    <strong> “I wish you were here.”</strong>
                  </p>

                  <div className="meaning-highlight">
                    👁️ Blink.
                    <br />
                    Think of Aluuu.
                    <br />
                    Miss Unique Aluu.
                    <br />
                    Smile. ❤️
                  </div>

                  <div className="meaning-last">
                    That's our little meaning of BLINK 11.
                  </div>
                </>
              ) : (
                <>
                  <div className="modal-meaning-icon reset-icon">
                    🔄
                  </div>

                  <div className="modal-code">RESET 31</div>

                  <h2>YOU ARE MY SAFE HOME ❤️</h2>

                  <p>
                    You are that person who can make a bad
                    day feel better without even trying.
                  </p>

                  <p>
                    You make problems feel smaller,
                    make me laugh and somehow give me
                    that feeling of being
                    <strong> safe and at home.</strong>
                  </p>

                  <div className="meaning-highlight">
                    🔄 Bad day?
                    <br />
                    Talk to you.
                    <br />
                    Smile again.
                    <br />
                    RESET. ❤️
                  </div>

                  <div className="meaning-last">
                    RESET 31 simply means:
                    you are my little safe home.
                  </div>
                </>
              )}

              <button
                className="meaning-close-btn"
                onClick={() => setSelected(null)}
              >
                CLOSE ✨
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="blink-reset-footer">
        BLINK 11 • RESET 31 • A LITTLE SECRET ❤️
      </div>
    </div>
  );
}

export default BlinkReset;
