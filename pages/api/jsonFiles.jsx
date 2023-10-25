const { promises: fs } = require("fs");

export default async function handler(req, res) {
  try {
    const data = await fs.readFile(`learnedApps/${req.query.slug}.json`);
    res.status(200).send(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: "Inernal Serever Error" });
  }
}

// const fs = require("fs");
// const path = require("path");

// export default function handler(req, res) {
//   const slug = req.query.slug;
//   const filePath = path.join("learnedApps", `${slug}.json`); // Ensure the correct file path and extension

//   fs.readFile(filePath, (error, data) => {
//     if (error) {
//       console.error("Error reading the file:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     } else {
//       try {
//         const jsonData = JSON.parse(data);
//         res.status(200).json(jsonData);
//       } catch (jsonError) {
//         console.error("Error parsing JSON:", jsonError);
//         res.status(500).json({ error: "Error parsing JSON" });
//       }
//     }
//   });
// }

// const fs = require("fs");

// export default function handler(req, res) {
//   const combineData = {};

//   fs.readFile("learnedApps/what-is-weatherApp.json", (error, data) => {
//     if (error) {
//       console.log("No file found", error);
//       res.status(500).json({ error: "Inernal Serever Error" });
//     } else {
//       combineData.weatherApp = JSON.parse(data);
//       fs.readFile("learnedApps/what-is-calculator.json", (error, data) => {
//         if (error) {
//           console.log("No file found", error);
//           res.status(500).json({ error: "Inernal Serever Error" });
//         } else {
//           combineData.calculator = JSON.parse(data);
//           fs.readFile("learnedApps/what-is-To-Do-List.json", (error, data) => {
//             if (error) {
//               console.log("No file found", error);
//               res.status(500).json({ error: "Inernal Serever Error" });
//             } else {
//               combineData.todoList = JSON.parse(data);
//               res.status(200).json(combineData);
//             }
//           });
//         }
//       });
//     }
//   });
// }
