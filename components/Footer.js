export default function Footer() {
  return (
    <footer className="bg-[#0b3849] text-white py-8">
      {/* Card Container */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Phone Section */}
        <div className="bg-[#1e4b5c] rounded-lg p-6 shadow-lg mx-auto w-64">
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <div>
              <img src="/icons/phone.png" alt="Phone" className="w-6 h-6 inline" />
            </div>
            <div>
              <h5 className="font-semibold text-sm">Phone Number</h5>
              <p className="text-gray-200">+974 3118 1843</p>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="bg-[#1e4b5c] rounded-lg p-6 shadow-lg mx-auto w-64 ">
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <div>
              <img src="/icons/email.png" alt="Email" className="w-6 h-6 inline" />
            </div>
            <div>
              <h5 className="font-semibold text-sm">Email Address</h5>
              <p className="text-gray-200">Elbrithcphr@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-[#1e4b5c] rounded-lg p-6 shadow-lg mx-auto w-64 ">
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <div>
              <img src="/icons/location.png" alt="Location" className="w-6 h-6 inline" />
            </div>
            <div>
              <h5 className="font-semibold text-sm">Office Location</h5>
              <p className="text-gray-200">Ambassador Street, Zone 61</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 mb-6 border-t border-gray-500"></div>

      {/* Logo and Description */}
      <div className="flex items-center justify-center space-x-6 mb-6">
        {/* Image */}
        <div>
          <img
            src="/images/logo.jpg"
            alt="ELBRIT Logo"
            className="w-32"
          />
        </div>

        {/* Text */}
        <div className="text-left">
          <p className="text-sm max-w-md">
            Your health, physical and emotional well-being is important to us. We
            are always by your side and have made it even easier for you to find
            the necessary vitamins.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm">
        <p>© ELBRIT Life Sciences Private Limited. All Rights Reserved.</p>
        <p>C20, BKC, G Block, Mumbai 400051</p>
      </div>
    </footer>
  );
}
