import React from "react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [os, setOs] = useState("");
  const [browser, setBrowser] = useState("");
  const [version, setVersion] = useState("");
  const [dis, setDis] = useState("");

  const handleTextChange = (e) => {
    let value = e.target.value;
    if (value == "") {
      setDis("");
    }
    setText(value);
  };

  const parseUserAgent = (ua) => {
    let dt = /Mobile|Android|iPhone|iPad/i.test(ua) ? "Mobile" : "Desktop";
    setDeviceType(dt);

    let osMatch = ua.match(/\(([^)]+)\)/);
    osMatch = osMatch ? osMatch[1].split(";")[0].trim() : "Unknown OS";
    setOs(osMatch);

    let browserMatch = ua.match(
      /(Chrome|Firefox|Safari|Edg|Opera|SamsungBrowser|Version)\/([\d.]+)/
    );
    let brow = browserMatch ? browserMatch[1] : "Unknown Browser";
    setBrowser(brow);
    let ver = browserMatch ? browserMatch[2] : "Unknown Version";
    setVersion(ver);
  };

  const parseUa = () => {
    console.log(`Parse UA function has been clicked.`);
    setDis("true");
    parseUserAgent(text);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full max-w-[900px] flex items-center gap-4 p-4 border rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter the UA string here..."
          className="input input-bordered flex-1 text-2xl"
          onChange={handleTextChange}
        />
        <button className="btn btn-primary" onClick={parseUa}>
          Submit
        </button>
      </div>
      {/* {text && <h1 class="text-2xl w-200 font-bold underline">{text}</h1>} */}
      <br />
      <br />
      <br />

      {dis && (
        <div className="overflow-x-auto">
          <table className="table w-full min-w-[500px] border border-gray-300">
            {/* <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Column 1</th>
              <th className="px-4 py-2 border">Column 2</th>
            </tr>
          </thead> */}
            <tbody>
              <tr className="text-center">
                <td className="px-4 py-2 border font-extrabold">DeviceType</td>
                <td className="px-4 py-2 border">{deviceType}</td>
              </tr>

              <tr className="text-center">
                <td className="px-4 py-2 border font-extrabold">OS</td>
                <td className="px-4 py-2 border">{os}</td>
              </tr>

              <tr className="text-center">
                <td className="px-4 py-2 border font-extrabold">Browser</td>
                <td className="px-4 py-2 border">{browser}</td>
              </tr>

              <tr className="text-center">
                <td className="px-4 py-2 border font-extrabold">
                  Browser Version
                </td>
                <td className="px-4 py-2 border">{version}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
