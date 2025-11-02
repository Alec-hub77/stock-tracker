"use client";

import Header from "@/components/Header";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default layout;
