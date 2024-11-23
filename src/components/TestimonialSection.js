

/* Updated TestimonialSection.js for responsiveness */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlus, FaEdit, FaTrash, FaStar, FaStarHalf } from "react-icons/fa";

const initialTestimonials = [
  {
    id: 1,
    name: "Samsul",
    role: "Project Manager",
    company: "Tech Corp",
    content: "Excellent developer with strong problem-solving skills. Delivered the project on time and exceeded expectations.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    id: 2,
    name: "Riski",
    role: "CEO",
    company: "StartUp Inc",
    content: "Great communication and technical expertise. Would definitely work with again!",
    rating: 4.5,
    image: "/api/placeholder/64/64"
  }
];

function TestimonialSection({ isDarkMode }) {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    rating: 5,
    image: "/api/placeholder/64/64"
  });

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half-star" className="text-yellow-400" />);
    }
    return stars;
  };

  const addTestimonial = () => {
    if (newTestimonial.name.trim() !== "" && newTestimonial.content.trim() !== "") {
      setTestimonials([...testimonials, { ...newTestimonial, id: Date.now() }]);
      setNewTestimonial({
        name: "",
        role: "",
        company: "",
        content: "",
        rating: 5,
        image: "/api/placeholder/64/64"
      });
    }
  };

  const updateTestimonial = (id, updatedTestimonial) => {
    setTestimonials(testimonials.map((testimonial) => 
      testimonial.id === id ? updatedTestimonial : testimonial
    ));
    setEditingTestimonial(null);
  };

  const deleteTestimonial = (id) => {
    setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));
  };

  return (
    <motion.section
      ref={ref}
      className={`
        min-h-screen w-full flex flex-col justify-start items-center 
        py-8 px-4 relative overflow-hidden 
        ${isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
        }
      `}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="container mx-auto h-full flex flex-col px-4 sm:px-6 lg:px-8 max-w-7xl"
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Client <span className="text-blue-500">Testimonials</span>
        </motion.h2>
        <motion.div
          className={`p-6 rounded-xl shadow-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4">Add New Testimonial</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTestimonial();
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              value={newTestimonial.name}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
              placeholder="Name"
              className={`p-2 rounded-md ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
            />
            <input
              type="text"
              value={newTestimonial.role}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
              placeholder="Role"
              className={`p-2 rounded-md ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
            />
            <input
              type="text"
              value={newTestimonial.company}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, company: e.target.value })}
              placeholder="Company"
              className={`p-2 rounded-md ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
            />
            <div className="sm:col-span-2">
              <textarea
                value={newTestimonial.content}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                placeholder="Testimonial content"
                className={`p-2 rounded-md w-full ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
                rows="3"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={newTestimonial.rating}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: parseFloat(e.target.value) })}
                min="0"
                max="5"
                step="0.5"
                className={`p-2 rounded-md w-24 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
              />
              <div className="flex">
                {renderStars(newTestimonial.rating)}
              </div>
            </div>
            <motion.button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlus />
              Add Testimonial
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 mt-8"
          variants={containerVariants}
        >
            
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={`
                p-6 rounded-xl shadow-lg
                ${isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
                }
              `}
              variants={itemVariants}
            >
              {editingTestimonial === testimonial.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateTestimonial(testimonial.id, {
                      ...testimonial,
                      name: e.target.name.value,
                      role: e.target.role.value,
                      company: e.target.company.value,
                      content: e.target.content.value,
                      rating: parseFloat(e.target.rating.value),
                    });
                  }}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="text"
                    name="name"
                    defaultValue={testimonial.name}
                    placeholder="Name"
                    className={`p-2 rounded-md ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
                  />
                  <input
                    type="text"
                    name="role"
                    defaultValue={testimonial.role}
                    placeholder="Role"
                    className={`p-2 rounded-md ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
                  />
                  <input
                    type="text"
                    name="company"
                    defaultValue={testimonial.company}
                    placeholder="Company"
                    className={`p-2 rounded-md ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
                  />
                  <textarea
                    name="content"
                    defaultValue={testimonial.content}
                    placeholder="Testimonial content"
                    className={`p-2 rounded-md ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
                    rows="3"
                  />
                  <input
                    type="number"
                    name="rating"
                    defaultValue={testimonial.rating}
                    min="0"
                    max="5"
                    step="0.5"
                    className={`p-2 rounded-md ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
                  />
                  <div className="flex justify-end gap-2">
                    <motion.button
                      type="submit"
                      className="px-3 py-1 bg-green-500 text-white rounded-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Save
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setEditingTestimonial(null)}
                      className="px-3 py-1 bg-gray-500 text-white rounded-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    "{testimonial.content}"
                  </p>
                  <div className="flex justify-end gap-2 mt-4">
                    <motion.button
                      onClick={() => setEditingTestimonial(testimonial.id)}
                      className={`p-2 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaEdit className="text-blue-500" />
                    </motion.button>
                    <motion.button
                      onClick={() => deleteTestimonial(testimonial.id)}
                      className={`p-2 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTrash className="text-red-500" />
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        
      </motion.div>
    </motion.section>
  );
}

export default TestimonialSection;
