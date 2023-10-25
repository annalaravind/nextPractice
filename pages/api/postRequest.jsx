const { promises: fs } = require("fs");

export default async function postRequest(req, res) {
  if (req.method === "POST") {
    try {
      await fs.writeFile("data/login.json", JSON.stringify(req.body));
      console.log("File created Successfully");
      res.status(200).json({ POST: "It is a POST Request" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(200).json({ error: "Request Failed" });
  }
}
