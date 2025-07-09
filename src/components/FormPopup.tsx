import React, { useEffect, useState } from "react";

const POPUP_DISMISS_KEY = "popupDismissedAt";

const FormPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const dismissedAt = localStorage.getItem(POPUP_DISMISS_KEY);
      if (dismissedAt) {
        const dismissedTime = new Date(dismissedAt).getTime();
        const now = new Date().getTime();
        const oneHour = 60 * 60 * 1000;
        if (now - dismissedTime < oneHour) {
          return; // ১ ঘন্টা এখনো হয়নি
        }
      }

      const scrollY = window.scrollY + window.innerHeight;
      const footer = document.getElementById("footer");
      if (footer) {
        const footerTop = footer.offsetTop;
        if (scrollY >= footerTop - 100) {
          setShowPopup(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    localStorage.setItem(POPUP_DISMISS_KEY, new Date().toISOString());
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleClose}
          ></div>

          {/* Popup */}
          <div className="relative z-50 w-full max-w-md bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-lg p-6 mx-4">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-white text-xl font-bold mb-2">
              Subscribe to our newsletter.
            </h2>
            <p className="text-gray-200 text-sm mb-4">
              Stay updated! Subscribe to our newsletter for the latest news and
              updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormPopup;
