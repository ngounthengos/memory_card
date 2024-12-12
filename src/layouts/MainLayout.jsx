import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className="h-[100vh] w-[100vw] text-center bg-gradient-to-b from-[#54B853] from-0% to-[#A7CE3A] to-60% overflow-hidden">
      {children}
    </div>
  );
}
