function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <i className="fas fa-briefcase text-blue-600 text-2xl"></i>
          <h1 className="text-xl font-bold text-gray-800">JobConnect</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            <i className="fas fa-bell"></i>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              JD
            </div>
            <span className="text-sm font-medium">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
