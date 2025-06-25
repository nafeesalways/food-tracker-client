import React from 'react';

const Reviews = () => {
    return (
             <section>
        <h2 className="text-3xl font-bold text-center mb-10 mt-10">What Our Users Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <p className="text-lg italic mb-4">
              “Since using FreshKeep, I haven’t thrown out a single bag of spinach. The expiry reminders are a lifesaver!”
            </p>
            <p className="text-sm font-semibold text-right">— Batista, Home Cook & Nutritionist</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <p className="text-lg italic mb-4">
              “I track my weekly grocery with ease now. It's intuitive and accurate with expiry updates.”
            </p>
            <p className="text-sm font-semibold text-right">— Nicolas Doe, Busy Dad</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <p className="text-lg italic mb-4">
              “FreshKeep helped me reduce my kitchen waste by over 40%. Game changer for sustainable living!”
            </p>
            <p className="text-sm font-semibold text-right">— John Cena, Eco-Conscious Blogger</p>
          </div>
        </div>
      </section>
    );
};

export default Reviews;