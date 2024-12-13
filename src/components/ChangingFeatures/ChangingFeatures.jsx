import React from "react";

export default function ChangingFeatures() {
  const handleSelectChange = (category, value) => {
    localStorage.setItem(category, value);
  };

  const moveToCancelPage = (e) => {
    e.preventDefault();
    window.location.href = "./featuresPage";
  };

  return (
    <div className="p-6 bg-gray-100">
      <table className="table-auto w-full bg-amber-50 border-4 border-blue-800">
        <thead>
          <tr className="text-center bg-blue-200">
            <th className="border-b-2 p-2">Features</th>
            <th className="border-b-2 p-2">Economy</th>
            <th className="border-b-2 p-2">Business</th>
            <th className="border-b-2 p-2">First Class</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              label: "Seat Pitch",
              options: [
                { category: "EconomySP", values: [20, 25, 30] },
                { category: "BusinessSP", values: [30, 35, 40] },
                { category: "FirstClassSP", values: [40, 45, 50] },
              ],
            },
            {
              label: "Seat Width",
              options: [
                { category: "EconomySW", values: [20, 25, 30] },
                { category: "BusinessSW", values: [30, 35, 40] },
                { category: "FirstClassSW", values: [40, 45, 50] },
              ],
            },
            {
              label: "Video Type",
              options: [
                {
                  category: "EconomyVT",
                  values: ["SeatBackTV", "Normal TV", "IPAD"],
                },
                {
                  category: "BusinessVT",
                  values: ["Laid Back TV", "LED TV", "IMAC"],
                },
                {
                  category: "FirstClassVT",
                  values: ["FULL HD TV", "ULTRA 4K TV", "UHD TV"],
                },
              ],
            },
            {
              label: "Power Type",
              options: [
                { category: "EconomyPT", values: ["None", "Small", "Xsmall"] },
                { category: "BusinessPT", values: ["Medium", "DC", "XMedium"] },
                { category: "FirstClassPT", values: ["Large", "AC", "XLarge"] },
              ],
            },
            {
              label: "Wi-fi",
              options: [
                { category: "EconomyWF", values: ["None"] },
                { category: "BusinessWF", values: ["4G"] },
                { category: "FirstClassWF", values: ["4G", "5G"] },
              ],
            },
            {
              label: "Seat Type",
              options: [
                { category: "EconomyST", values: ["None", "Recliner"] },
                { category: "BusinessST", values: ["None", "Flat Bed"] },
                { category: "FirstClassST", values: ["None", "Closed Suite"] },
              ],
            },
          ].map(({ label, options }) => (
            <tr key={label}>
              <td className="p-2 text-center">{label}</td>
              {options.map(({ category, values }, index) => (
                <td key={category} className="p-2 text-center">
                  <select
                    onChange={(e) =>
                      handleSelectChange(category, e.target.value)
                    }
                    className="border-2 border-blue-500 p-1 rounded"
                  >
                    {values.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
        <button
          onClick={moveToCancelPage}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
