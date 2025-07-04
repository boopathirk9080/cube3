import { AnimatePresence, motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const BlogDetails = ({ service: post, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 p-2 z-50  backdrop-blur-sm"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 bg-black/30"
            onClick={onClose}
          />

          <motion.div
            className="relative mx-auto my-8 max-w-4xl  bg-white shadow-xl rounded-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <motion.button
              className="absolute top-4 lg:right-8 right-4 font-extrabold cursor-pointer text-white text-2xl bg-[#df3939] bg-opacity-70  rounded-full h-10 w-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              <IoClose />


            </motion.button>

            {post && (
              <div className="max-h-[90vh] rounded-xl overflow-y-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover rounded-t-xl"
                />

                <div className="p-6">
                  <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                  <p className="text-gray-600 text-justify mb-6">{post.content}</p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Key Points</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {post.keyPoints?.map((point, index) => (
                        <li key={index} className="text-gray-700">{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
                    <span>Category: {post.category}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogDetails;








