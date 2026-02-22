import { motion } from "motion/react";

function FormError({ error }) {
  return (
    <div>
      {error && (
        <motion.p
          className="bg-red-200 px-6 py-2 w-full text-red-600 rounded-sm shadow-lg"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default FormError;
