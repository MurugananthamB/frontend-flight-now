import React from "react";

export default function TicketPage({ history }) {
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
    history.push("/routes");
  };

  const getLocationData = () => {
    const from = localStorage.getItem("start");
    const to = localStorage.getItem("destination");
    return (
      <div className="text-lg">
        <p>From: {from}</p>
        <p>To: {to}</p>
      </div>
    );
  };

  const getPassengerName = () => {
    const nameArray = localStorage.getItem("nameData");
    const names = JSON.parse(nameArray);
    return names.map((name, idx) => (
      <div key={idx} className="capitalize">
        <p>{name}</p>
      </div>
    ));
  };

  const getSeatNumbers = () => {
    const noArray = localStorage.getItem("reservedSeats");
    const arr = JSON.parse(noArray);
    return arr.map((element, idx) => (
      <div key={idx} className="inline-block">
        <p>{element}</p>
      </div>
    ));
  };

  const getIdNumber = () => {
    const tokenData = localStorage.getItem("selectedBusId");
    return <p className="uppercase text-sm">{tokenData}</p>;
  };

  const getDateValue = () => {
    const date = localStorage.getItem("date");
    return <p>On: {date}, 10 AM (Hourly commute)</p>;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-300 to-gray-200 text-gray-800">
      <nav className="bg-red-600 w-full p-4 flex justify-between items-center">
        <a href="/#" className="text-2xl text-white font-bold">
          SA
        </a>
        <div className="flex space-x-4">
          <a href="/#" className="text-white" onClick={handleBookAgainIcon}>
            Book Again
          </a>
          <a href="/#" className="text-white" onClick={handleSignOut}>
            Sign-Out
          </a>
        </div>
      </nav>

      <div className="mt-8 p-6 bg-white max-w-md w-full shadow-lg rounded-lg">
        <article className="flex flex-col">
          <header className="text-2xl font-bold text-center py-4 border-b border-red-500">
            🎟 SWADESHI AIRLINES
          </header>

          <div className="flex justify-between items-center border-b border-gray-200 py-4">
            <div className="bg-white h-4 w-4 rounded-full shadow-inner border"></div>
            <div className="bg-white h-4 w-4 rounded-full shadow-inner border"></div>
          </div>

          <div className="py-6">
            <section className="text-lg mb-4">
              {getLocationData()}
              <div className="mt-2">
                Your seats are together <span>{getDateValue()}</span>
              </div>
            </section>
            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Passenger Names</h3>
              {getPassengerName()}
            </section>
            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
              <p>Credit Card</p>
            </section>
          </div>

          <footer className="text-lg font-medium text-center border-t border-dashed border-gray-300 pt-4">
            <p>Transaction-ID</p>
            {getIdNumber()}
          </footer>
        </article>
      </div>
    </div>
  );
}
