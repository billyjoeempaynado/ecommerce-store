export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="w-[92%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side: Company info */}
        <p className="text-sm">&copy; {new Date().getFullYear()} My Store. All rights reserved.</p>

        {/* Right side: Links */}
        <ul className="flex gap-6 text-sm">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}
