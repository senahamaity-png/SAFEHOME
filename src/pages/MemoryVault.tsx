import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, Camera, Heart, Sparkles } from "lucide-react";

interface MemoryVaultProps {
  nextPage: () => void;
}

function MemoryVault({ nextPage }: MemoryVaultProps) {
  const [selectedFile, setSelectedFile] = useState<number | null>(null);
  const [openedFiles, setOpenedFiles] = useState<number[]>([]);

  const memories = [
    {
      id: 1,
      title: "FILE 001",
      emoji: "🥔",
      heading: "THE ALU FILE",
      message:
        "Somewhere between random conversations, silly jokes and endless teasing... one very special Alu became part of your little world. 🥔❤️",
      note: "Official status: YOUR UNIQUE ALU 😌",
    },
    {
      id: 2,
      title: "FILE 002",
      emoji: "🧸",
      heading: "THE VALU FILE",
      message:
        "A tiny teddy with one very important job — staying close whenever work gets too much and reminding you to smile. 🧸",
      note: "Official status: EMOTIONAL SUPPORT VALU 😂",
    },
    {
      id: 3,
      title: "FILE 003",
      emoji: "❤️",
      heading: "THE SECRET FILE",
      message:
        "Distance may separate two places on the map, but it doesn't have to separate two people who have created their own little world. 🇮🇳❤️🇨🇦",
      note: "Classification: TOO SPECIAL TO DELETE 🔐",
    },
  ];

  const openFile = (id: number) => {
    setSelectedFile(id);

    if (!openedFiles.includes(id)) {
      setOpenedFiles((previous) => [...previous, id]);
    }
  };

  const closeFile = () => {
    setSelectedFile(null);
  };

  const selectedMemory = memories.find(
    (memory) => memory.id === selectedFile
  );

  const allFilesOpened = openedFiles.length === memories.length;

  return (
    <div className="memory-vault-page">

      {/* Floating decorations */}
      <div className="memory-float memory-one">📸</div>
      <div className="memory-float memory-two">❤️</div>
      <div className="memory-float memory-three">🔐</div>

      {/* Mission */}
      <motion.div
        className="memory-mission"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MISSION 07 / 11
      </motion.div>

      {/* Heading */}
      <motion.div
        className="memory-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Camera size={35} />

        <h1>MEMORY VAULT</h1>

        <p>
          Not every memory needs a photo...
          <br />
          Some memories live in the heart. ❤️
        </p>
      </motion.div>

      {/* Small instruction */}
      <motion.div
        className="memory-instruction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        🔐 THREE SECRET FILES HAVE BEEN FOUND
        <br />
        <span>Open them one by one.</span>
      </motion.div>

      {/* Memory Files */}
      <motion.div
        className="memory-files"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {memories.map((memory) => {
          const isOpened = openedFiles.includes(memory.id);

          return (
            <motion.button
              key={memory.id}
              className={`memory-file ${
                isOpened ? "memory-file-opened" : ""
              }`}
              onClick={() => openFile(memory.id)}
              whileHover={{ y: -7 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="file-top">
                <span>{memory.title}</span>

                {isOpened ? (
                  <span className="file-status">
                    OPENED ✓
                  </span>
                ) : (
                  <Lock size={17} />
                )}
              </div>

              <div className="file-icon">
                {memory.emoji}
              </div>

              <h2>
                {memory.heading}
              </h2>

              <p>
                CLASSIFIED MEMORY
              </p>

              <span className="open-file-text">
                {isOpened ? "VIEW AGAIN" : "OPEN FILE"}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Progress */}
      <div className="memory-progress">

        <div className="progress-text">
          MEMORIES DISCOVERED: {openedFiles.length} / 3
        </div>

        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            animate={{
              width: `${(openedFiles.length / 3) * 100}%`,
            }}
          />
        </div>

      </div>

      {/* Complete message */}
      <AnimatePresence>
        {allFilesOpened && (
          <motion.div
            className="vault-complete"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Sparkles size={18} />

            ALL MEMORIES UNLOCKED ✨

            <span>
              Okay Sir... you've officially opened
              all the suspicious files. 😂❤️
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next */}
      {allFilesOpened && (
        <motion.button
          className="memory-next-btn"
          onClick={nextPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          OPEN WHEN... 💌
        </motion.button>
      )}

      {/* Memory Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="memory-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFile}
          >
            <motion.div
              className="memory-modal"
              initial={{
                scale: 0.7,
                opacity: 0,
                y: 30,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.7,
                opacity: 0,
                y: 30,
              }}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >

              {/* Close */}
              <button
                className="memory-close"
                onClick={closeFile}
              >
                <X size={20} />
              </button>

              {/* File label */}
              <div className="modal-file-label">
                🔐 {selectedMemory.title}
              </div>

              {/* Big Emoji */}
              <motion.div
                className="modal-memory-emoji"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.1,
                }}
              >
                {selectedMemory.emoji}
              </motion.div>

              {/* Content */}
              <h2>
                {selectedMemory.heading}
              </h2>

              <div className="modal-heart">
                <Heart size={18} />
              </div>

              <p className="memory-message">
                {selectedMemory.message}
              </p>

              <div className="memory-secret">
                {selectedMemory.note}
              </div>

              <button
                className="close-memory-btn"
                onClick={closeFile}
              >
                CLOSE FILE ✕
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="memory-footer">
        🥔 ALU • 🧸 VALU • ❤️ MEMORIES
      </div>

    </div>
  );
}

export default MemoryVault;