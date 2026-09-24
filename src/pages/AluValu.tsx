import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Lock, Sparkles } from "lucide-react";


interface AluValuProps {
  nextPage: () => void;
}

function AluValu({ nextPage }: AluValuProps) {
  const [revealed, setRevealed] = useState(false);

  const revealDuo = () => {
    setRevealed(true);
  };

  return (
    <div className="alu-valu-page">

      {/* Floating decorations */}

      <motion.div
        className="alu-float potato-one"
        animate={{
          y: [0, -15, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        🥔
      </motion.div>

      <motion.div
        className="alu-float teddy-one"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        🧸
      </motion.div>

      <motion.div
        className="alu-float heart-one"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        💗
      </motion.div>

      <motion.div
        className="alu-valu-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        {/* Mission */}

        <div className="alu-mission">
          MISSION 03 04 / 11
        </div>

        {/* Header */}

        <motion.div
          className="alu-title-icon"
          animate={{
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          🥔
        </motion.div>

        <p className="alu-label">
          🚨 CLASSIFIED DISCOVERY
        </p>

        <h1>
          THE UNIQUE ALU HAS BEEN FOUND! 🥔
        </h1>

        <p className="alu-subtitle">
          After a very serious investigation,
          we finally discovered the person behind
          the suspicious amount of happiness. 👀
        </p>

        {/* Reveal area */}

        {!revealed ? (
          <motion.div
            className="classified-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <div className="lock-circle">
              <Lock size={35} />
            </div>

            <h2>
              CLASSIFIED FILE 🔐
            </h2>

            <p>
              Two extremely important subjects
              are hiding inside this file.
            </p>

            <p className="classified-small">
              Warning: Opening this file may cause
              unexpected smiling. 😌
            </p>

            <button
              className="reveal-btn"
              onClick={revealDuo}
            >
              <Sparkles size={19} />
              REVEAL THE DUO 🥔🧸
            </button>

          </motion.div>
        ) : (

          <motion.div
            className="revealed-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            {/* Alu */}

            <motion.div
              className="person-card alu-card"
              initial={{
                opacity: 0,
                x: -60,
                rotate: -5,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: -2,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <div className="photo-label">
                SUBJECT 01
              </div>

              <div className="photo-frame">
                <img
                src="/SAFEHOME/sneha1.jpeg"
                  alt="Unique Alu"
                />
              </div>

              <div className="subject-info">
                <span className="subject-icon">
                  🥔
                </span>

                <div>
                  <h2>
                    UNIQUE ALU
                  </h2>

                  <p>
                    Rare • Cute • Slightly Crazy
                  </p>
                </div>
              </div>

              <div className="alu-message">
                <p>
                  “This is not just an Alu.
                  This is the <strong>one and only Unique Alu</strong>
                  who somehow managed to become
                  a permanent part of your life.”
                </p>

                <p>
                  No replacement available.
                  No duplicate found.
                  No return policy either. 😌
                </p>

                <div className="pocket-line">
                  ❤️ And yes... this one belongs
                  in your pocket.
                </div>
              </div>

            </motion.div>

            {/* Valu */}

            <motion.div
              className="person-card valu-card"
              initial={{
                opacity: 0,
                x: 60,
                rotate: 5,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
            >

              <div className="photo-label">
                SUBJECT 02
              </div>

              <div className="photo-frame">
                <img
                src="/SAFEHOME/valu.jpeg"
                  alt="Valu Teddy"
                />
              </div>

              <div className="subject-info">
                <span className="subject-icon">
                  🧸
                </span>

                <div>
                  <h2>
                    VALU
                  </h2>

                  <p>
                    Soft • Cute • Officially Alu's Partner
                  </p>
                </div>
              </div>

              <div className="valu-message">
                <p>
                  “Every Unique Alu needs her Valu.
                  Someone to sit quietly,
                  listen to everything,
                  and look cute while doing absolutely nothing.” 🧸
                </p>

                <div className="valu-status">
                  🧸 Valu Status: ALWAYS ON DUTY
                </div>
              </div>

            </motion.div>

          </motion.div>
        )}

        {/* Bottom message */}

        {revealed && (
          <motion.div
            className="duo-message"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
          >

            <Heart
              size={22}
              fill="currentColor"
            />

            <p>
              One Unique Alu.
              One Valu.
              One very special place in your life. ❤️
            </p>

          </motion.div>
        )}

        {/* Next button */}

        {revealed && (
          <motion.button
            className="pocket-btn"
            onClick={nextPage}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1,
            }}
          >
            WHERE DOES THE ALU BELONG? 👀❤️
          </motion.button>
        )}

        <div className="alu-footer">
          🥔 Official Unique Alu Department • 🧸 Valu Security Division
        </div>

      </motion.div>
    </div>
  );
}

export default AluValu;