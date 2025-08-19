import React from 'react';

const NewsLetterBox = () => {
    return (
      <section className="bg-green-100 py-16 px-6 rounded-lg shadow-lg max-w-xl mx-auto my-20 text-center text-white">
  <h2 className="text-3xl font-bold mb-4 text-black">Stay Updated!</h2>
  <p className="mb-6 text-gray-600">Subscribe to our newsletter for tips, updates, and exclusive offers.</p>
  <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
    <input
      type="email"
      placeholder="Your email address"
      className="p-3 rounded flex-1 text-gray-900"
      required
    />
    <button type="submit" className="btn bg-white text-green-600 font-bold rounded px-6 py-3 hover:bg-green-50 transition">
      Subscribe
    </button>
  </form>
</section>

    );
};

export default NewsLetterBox;