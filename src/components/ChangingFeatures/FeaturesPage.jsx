import React from "react";

export default function FeaturesPage({ history }) {
  const handleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("reservedSeats");
    localStorage.removeItem("nameData");
    localStorage.clear();
    history.push("/");
  };

  const handleBookAgainIcon = (e) => {
    e.preventDefault();
    localStorage.removeItem("reservedSeats");
    localStorage.removeItem("nameData");
    localStorage.clear();
    history.push("/routes");
  };

  return (
    <div className="bg-cover bg-no-repeat" style={{ backgroundSize: "cover" }}>
      <div className="container mx-auto p-6">
        {/* Navbar */}
        <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
          <a href="/#" className="navbar-brand text-xl font-bold text-white">
            SA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-3"
            aria-controls="navbarSupportedContent-3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-3"
          >
            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="nav-item">
                <a
                  href="/#"
                  className="nav-link text-black hover:text-gray-700"
                  onClick={(e) => handleBookAgainIcon(e)}
                >
                  Book Again
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/#"
                  className="nav-link text-black hover:text-gray-700"
                  onClick={(e) => handleSignOut(e)}
                >
                  Sign-Out
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            The Selected Features Are
          </h2>

          <table className="min-w-full table-auto border-collapse border-2 border-gray-800 mx-auto">
            <thead>
              <tr className="bg-blue-200 text-center">
                <th className="px-4 py-2 border-b">Features</th>
                <th className="px-4 py-2 border-b">Economy</th>
                <th className="px-4 py-2 border-b">Business</th>
                <th className="px-4 py-2 border-b">First Class</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-4 py-2 border-b">Seat Pitch</td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("EconomySP")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("BusinessSP")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("FirstClassSP")}
                </td>
              </tr>
              <tr className="text-center">
                <td className="px-4 py-2 border-b">Seat Width</td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("EconomySW")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("BusinessSW")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("FirstClassSW")}
                </td>
              </tr>
              <tr className="text-center">
                <td className="px-4 py-2 border-b">Video Type</td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("EconomyVT")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("BusinessVT")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("FirstClassVT")}
                </td>
              </tr>
              <tr className="text-center">
                <td className="px-4 py-2 border-b">Power Type</td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("EconomyPT")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("BusinessPT")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("FirstClassPT")}
                </td>
              </tr>
              <tr className="text-center">
                <td className="px-4 py-2 border-b">Wi-fi</td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("EconomyWF")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("BusinessWF")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("FirstClassWF")}
                </td>
              </tr>
              <tr className="text-center">
                <td className="px-4 py-2 border-b">Seat Type</td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("EconomyST")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("BusinessST")}
                </td>
                <td className="px-4 py-2 border-b">
                  {localStorage.getItem("FirstClassST")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
