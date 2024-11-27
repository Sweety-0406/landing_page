import React, { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "./constant";
import { FaChevronDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";



const FAQPage = () => {
  const [active, setActive] = useState(null);


  const toggle = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <div
    className=" h-[60vh] pb-10"
    >
        <div className="px-10 lg:px-[10%]">
            <div className="w-full max-w-xl mx-auto bg-slate-800 bg-opacity-40 text-white rounded-lg p-6">
                <h2 className="text-yellow-300 text-2xl font-bold mb-4 text-center">FAQs</h2>
                {faqs.map((faq, index) => (
                    <div
                    key={index}
                    className="border-b border-gray-700 py-4"
                    >

                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggle(index)}
                    >
                        <h3 className="text-lg">{faq.question}</h3>
                        <motion.div
                        animate={{ rotate: active === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl bg-gray-600 rounded-full p-1"
                        >
                        {active === index ? 
                            <FaChevronDown />
                         : 
                            <FaPlus />
                         }
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                        opacity: active === index ? 1 : 0,
                        height: active === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm mt-2">{faq.answer}</p>
                    </motion.div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default FAQPage;
