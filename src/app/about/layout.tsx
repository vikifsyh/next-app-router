export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside className="fixed right-0 top-10 h-screen z-10 w-60 bg-blue-800">
        <ul className="text-white p-5">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </aside>
      {children}
    </>
  );
}
