
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle2, Lock } from "lucide-react";

interface InvestigationProps {
  nextPage: () => void;
}

function Investigation({ nextPage }: InvestigationProps) {
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const startInvestigation = () => {
    setScanning(true);

    setTimeout(() => {
      setScanning(false);
      setScanComplete(true);
    }, 2500);
  };

  return (
    <div className="investigation-page">

      {/* Floating decorations */}

      <motion.div
        className="invest-float potato-float"
        animate={{
          y: [0, -12, 0],
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
        className="invest-float teddy-float"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        🧸
      </motion.div>

      <motion.div
        className="investigation-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >

        {/* Header */}

        <div className="mission-number">
          MISSION 02 / 11
        </div>

        <div className="investigation-icon">
          <Search size={30} />
        </div>

        <p className="invest-label">
          🔍 CONFIDENTIAL INVESTIGATION
        </p>

        <h1>
          Subject: Rajesh 👀
        </h1>

        <p className="invest-subtitle">
          Our highly qualified Alu Investigation Team
          has detected some suspicious activity.
        </p>

        {/* Scan button */}

        {!scanComplete && (
          <div className="scan-area">

            <div className="scan-circle">

              <motion.div
                className="scan-line"
                animate={
                  scanning
                    ? {
                        y: [0, 180, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 1.2,
                  repeat: scanning ? Infinity : 0,
                }}
              />

              <Search size={45} />

            </div>

            {!scanning ? (
              <>
                <h2>
                  Ready for investigation? 🕵️
                </h2>

                <p>
                  Don't worry. We promise this is
                  completely scientific. 😌
                </p>

                <button
                  className="scan-btn"
                  onClick={startInvestigation}
                >
                  <Search size={18} />
                  START INVESTIGATION
                </button>
              </>
            ) : (
              <>
                <h2>
                  Scanning Rajesh... 🔍
                </h2>

                <p className="scanning-text">
                  Please remain suspicious...
                </p>

                <div className="loading-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </>
            )}

          </div>
        )}

        {/* Results */}

        {scanComplete && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="result-header">
              <CheckCircle2 size={24} />

              <span>
                INVESTIGATION COMPLETE
              </span>
            </div>

            <div className="evidence-list">

              <motion.div
                className="evidence-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span>😊</span>

                <div>
                  <strong>
                    Smile Detected
                  </strong>

                  <p>
                    Suspiciously cute smile found.
                  </p>
                </div>

                <b>✓</b>
              </motion.div>

              <motion.div
                className="evidence-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span>❤️</span>

                <div>
                  <strong>
                    Caring Detected
                  </strong>

                  <p>
                    Subject appears to care a lot.
                  </p>
                </div>

                <b>✓</b>
              </motion.div>

              <motion.div
                className="evidence-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span>💼</span>

                <div>
                  <strong>
                    Workaholic Detected
                  </strong>

                  <p>
                    Work level dangerously high.
                  </p>
                </div>

                <b>⚠️</b>
              </motion.div>

              <motion.div
                className="evidence-item suspicious"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span>🥔</span>

                <div>
                  <strong>
                    ALU SIGNAL DETECTED
                  </strong>

                  <p>
                    Someone called "Unique Alu"
                    is connected to this subject.
                  </p>
                </div>

                <b>🚨</b>
              </motion.div>

            </div>

            {/* Secret discovery */}

            <div className="secret-discovery">

              <Lock size={20} />

              <div>
                <strong>
                  ONE MORE DISCOVERY...
                </strong>

                <p>
                  We found someone who may be
                  responsible for all this happiness. 👀
                </p>
              </div>

            </div>

            <button
              className="discover-btn"
              onClick={nextPage}
            >
              FIND THE SUSPECT 🥔
            </button>

          </motion.div>
        )}

        <div className="invest-footer">
          🔐 Property of Alu Investigation Department
        </div>

      </motion.div>
    </div>
  );
}

export default Investigation;

