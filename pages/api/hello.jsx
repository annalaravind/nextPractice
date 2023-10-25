// const { promises: fs } = require("fs");

// export default async function handler(req, res) {
//   try {
//     const data = await fs.readdir("learnedApps");
//     res.status(200).send(data);
//   } catch (err) {
//     res.status(500).json({ error: "file not found" });
//   }
// }

const { promises: fs } = require("fs");

export default async function handler(req, res) {
  try {
    const files = await fs.readdir("learnedApps");
    let arrayData = [];

    for (const file of files) {
      try {
        const data = await fs.readFile(`learnedApps/${file}`, "utf8");
        arrayData.push(data);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
    const jsonArray = "[" + arrayData.join(", ") + "]";
    const response = JSON.parse(jsonArray);
    console.log(response);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).json({ error: "File not found" });
  }
}
