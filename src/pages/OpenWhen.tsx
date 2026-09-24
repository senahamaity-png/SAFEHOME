import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Heart, Sparkles } from "lucide-react";

interface OpenWhenProps {
  nextPage: () => void;
}

function OpenWhen({ nextPage }: OpenWhenProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [openedLetters, setOpenedLetters] = useState<number[]>([]);

  const letters = [
    {
      id: 1,
      emoji: "💼",
      title: "OPEN WHEN...",
      heading: "WORK IS KILLING YOU",
      message:
        "Sir, pause. Breathe. Drink some water. And remember — not every problem needs to be solved in the next 5 minutes. 😌",
      secret: "Your Alu has officially ordered a small break. 🥔",
    },
    {
      id: 2,
      emoji: "😔",
      title: "OPEN WHEN...",
      heading: "YOU'RE HAVING A BAD DAY",
      message:
        "One bad day doesn't mean a bad life. So take a little break, smile for a second and remember that someone is always secretly cheering for you. ❤️",
      secret: "Bad day detected. Smile protocol activated. 🧸",
    },
    {
      id: 3,
      emoji: "😂",
      title: "OPEN WHEN...",
      heading: "YOU NEED A SMILE",
      message:
        "Breaking News 🚨: A very suspicious Alu has entered your screen just to make Sir smile. Mission objective: SUCCESS. 😂🥔",
      secret: "Side effect: random smiling may occur.",
    },
    {
      id: 4,
      emoji: "🌙",
      title: "OPEN WHEN...",
      heading: "YOU CAN'T SLEEP",
      message:
        "Put the phone down, close your eyes and relax. Tomorrow has enough problems waiting. Tonight, your only job is to rest. 🌙",
      secret: "No overthinking allowed after this message. 😌",
    },
    {
      id: 5,
      emoji: "❤️",
      title: "OPEN WHEN...",
      heading: "YOU MISS YOUR ALU",
      message:
        "Then remember this: distance can change locations, but it cannot delete a person from your little world. 🇮🇳❤️🇨🇦",
      secret: "Alu is permanently stored in your heart pocket. 🥔❤️",
    },
  ];

  const openLetter = (id: number) => {
    setSelectedId(id);

    if (!openedLetters.includes(id)) {
      setOpenedLetters((previous) => [...previous, id]);
    }
  };

  const closeLetter = () => {
    setSelectedId(null);
  };

  const selectedLetter = letters.find(
    (letter) => letter.id === selectedId
  );

  const allOpened = openedLetters.length === letters.length;

  return (
    <div className="open-when-page">

      {/* Floating decorations */}
      <div className="open-float open-float-one">💌</div>
      <div className="open-float open-float-two">❤️</div>
      <div className="open-float open-float-three">✨</div>

      {/* Mission */}
      <motion.div
        className="open-mission"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MISSION 08 / 11
      </motion.div>

      {/* Heading */}
      <motion.div
        className="open-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Mail size={36} />

        <h1>OPEN WHEN...</h1>

        <p>
          Five little messages.
          <br />
          For five different moments. ❤️
        </p>
      </motion.div>

      {/* Instruction */}
      <motion.div
        className="open-instruction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        💌 SOME LETTERS ARE WAITING FOR YOU
        <br />
        <span>Open them whenever you need them.</span>
      </motion.div>

      {/* Letters */}
      <motion.div
        className="open-letters"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {letters.map((letter) => {
          const isOpened = openedLetters.includes(letter.id);

          return (
            <motion.button
              key={letter.id}
              className={`open-letter ${
                isOpened ? "open-letter-opened" : ""
              }`}
              onClick={() => openLetter(letter.id)}
              whileHover={{ y: -8, rotate: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="letter-icon">
                {letter.emoji}
              </div>

              <div className="letter-label">
                {letter.title}
              </div>

              <h2>{letter.heading}</h2>

              <div className="letter-bottom">
                {isOpened ? (
                  <>
                    <span>OPENED ✓</span>
                    <Heart size={15} />
                  </>
                ) : (
                  <>
                    <span>CLICK TO OPEN</span>
                    <Mail size={15} />
                  </>
                )}
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Progress */}
      <div className="open-progress">
        <div className="open-progress-text">
          LETTERS OPENED: {openedLetters.length} / 5
        </div>

        <div className="open-progress-bar">
          <motion.div
            className="open-progress-fill"
            animate={{
              width: `${(openedLetters.length / 5) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Complete */}
      <AnimatePresence>
        {allOpened && (
          <motion.div
            className="open-complete"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Sparkles size={18} />

            ALL LETTERS OPENED ✨

            <span>
              Sir has officially unlocked all five secret messages. 😂❤️
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Mission */}
      {allOpened && (
        <motion.button
          className="open-next-btn"
          onClick={nextPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          NEXT: RAJESH RECOVERY CENTER 🚑
        </motion.button>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            className="open-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLetter}
          >
            <motion.div
              className="open-modal"
              initial={{
                opacity: 0,
                scale: 0.75,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                y: 30,
              }}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >

              {/* Close */}
              <button
                className="open-close"
                onClick={closeLetter}
              >
                <X size={20} />
              </button>

              {/* Emoji */}
              <motion.div
                className="modal-letter-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.1,
                }}
              >
                {selectedLetter.emoji}
              </motion.div>

              <div className="modal-letter-label">
                {selectedLetter.title}
              </div>

              <h2>{selectedLetter.heading}</h2>

              <Heart
                className="modal-open-heart"
                size={19}
              />

              <p className="open-message">
                {selectedLetter.message}
              </p>

              <div className="open-secret">
                {selectedLetter.secret}
              </div>

              <button
                className="close-open-btn"
                onClick={closeLetter}
              >
                CLOSE LETTER 💌
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="open-footer">
        💌 LITTLE LETTERS • BIG FEELINGS ❤️
      </div>

    </div>
  );
}

export default OpenWhen;