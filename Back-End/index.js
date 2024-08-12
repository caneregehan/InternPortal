import express from "express";
import sql from "mssql";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config(); // Load environment variables
const app = express(); // Create Express application

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());

// SQL Server configuration
const config = {
  user: "sa",
  password: "Passw0rd'",
  server: "localhost",
  database: "users",
  options: {
    encrypt: false,
  },
};

// Connect to SQL Server
sql.connect(config, (err) => {
  if (err) {
    throw err;
  }
  console.log("Connection Successful!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ status: "error", message: err.message });
});

app.use(
  "/public",
  express.static(path.join(__dirname, "../public"))
);

// Directory for file uploads
const uploadsDir = path.join(
  __dirname,
  "../public/uploads"
);

// Multer configuration with file filter for zip files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const username = req.params;

    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "application/zip" ||
    file.mimetype === "application/x-zip-compressed"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error("Yalnızca zip dosyalarına izin verilir!"),
      false
    );
  }
};

const upload = multer({ storage, fileFilter });

// List files
app.get("/api/files", (req, res) => {
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Dizin Taranamıyor" });
    }
    res.json(files);
  });
});

// Upload file
app.post(
  "/api/upload",
  upload.single("file"),
  (req, res) => {
    if (!req.file) {
      return res
        .status(400)
        .json({ error: "Dosya Yüklenemedi" });
    }
    res.json({ file: req.file });
  }
);

// Use the user routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

// Start the server on port 5911
app.listen(5911, () => {
  console.log("Listening on port 5911...");
});
