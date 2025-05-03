import React from "react";

const AvatarDropdown: React.FC = () => {
  return (
    <div className="relative group hidden md:inline-block">
      {/* Avatar */}
      <button
        type="button"
        className="rounded-full overflow-hidden border border-gray-300 shadow-inner"
      >
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop"
          alt="User Avatar"
          className="w-10 h-10 object-cover"
        />
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2">
          {["My profile", "Billing summary", "Team settings"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="border-t px-2 py-2">
          <button
            type="button"
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarDropdown;
