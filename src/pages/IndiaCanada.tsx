import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Globe2, Sparkles } from "lucide-react";
interface IndiaCanadaProps {
  nextPage: () => void;
}

function IndiaCanada({ nextPage }: IndiaCanadaProps) {
  const [indiaTime, setIndiaTime] = useState("");
  const [canadaTime, setCanadaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const india = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      const canada = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      setIndiaTime(india);
      setCanadaTime(canada);
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="india-canada-page">

      {/* Floating decorations */}
      <div className="country-float india-float">🇮🇳</div>
      <div className="country-float canada-float">🇨🇦</div>
      <div className="country-float heart-float">❤️</div>

      {/* Mission */}
      <motion.div
        className="ic-mission"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MISSION 06 / 11
      </motion.div>

      {/* Heading */}
      <motion.div
        className="ic-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Globe2 size={35} />

        <h1>INDIA ↔ CANADA</h1>

        <p>
          Different countries.
          <br />
          Same little world. ❤️
        </p>
      </motion.div>

      {/* Connection */}
      <motion.div
        className="connection-area"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >

        {/* India */}
        <div className="country-card">
          <div className="country-flag">🇮🇳</div>

          <h2>INDIA</h2>

          <p className="person-name">
            Sneha
          </p>

          <div className="clock-box">
            <Clock size={18} />
            <span>{indiaTime}</span>
          </div>

          <small>
            Asia / Kolkata
          </small>
        </div>

        {/* Connection line */}
        <div className="connection-line">

          <motion.div
            className="travelling-heart"
            animate={{
              left: ["5%", "95%", "5%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.div>

          <div className="line"></div>

          <motion.div
            className="connection-text"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            ALWAYS CONNECTED
          </motion.div>

        </div>

        {/* Canada */}
        <div className="country-card">
          <div className="country-flag">🇨🇦</div>

          <h2>CANADA</h2>

          <p className="person-name">
            Rajesh
          </p>

          <div className="clock-box">
            <Clock size={18} />
            <span>{canadaTime}</span>
          </div>

          <small>
            America / Toronto
          </small>
        </div>

      </motion.div>

      {/* Message */}
      <motion.div
        className="distance-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Sparkles size={20} />

        <p>
          The clocks may show different times...
          <br />
          but somehow, you both still share the same little world. ❤️
        </p>

        <div className="distance-line">
          🇮🇳 Sneha
          <span>──── ❤️ ────</span>
          🇨🇦 Rajesh
        </div>
      </motion.div>

      {/* Continue */}
      <motion.button
        className="ic-next-btn"
        onClick={nextPage}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.96,
        }}
      >
        OPEN MEMORY VAULT 📸
      </motion.button>

      {/* Footer */}
      <div className="ic-footer">
        🌍 DISTANCE IS GEOGRAPHY • CONNECTION IS SOMETHING ELSE ❤️
      </div>

    </div>
  );
}

export default IndiaCanada;