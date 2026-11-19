# Fluxmeter

An Electron desktop bandwidth monitor. Run `npm ci` followed by `npm start` on a desktop with Node.js 22 and a graphical session. The app samples the default network adapter every second and displays download/upload throughput, transfer totals, and a rolling activity graph. This measures traffic in use, not your ISP's maximum speed. Session summaries and display preferences are kept locally.

For a browser-only demonstration, run `npm run preview` and open port 5173. Browser preview data is simulated; Electron uses native interface counters via systeminformation.
