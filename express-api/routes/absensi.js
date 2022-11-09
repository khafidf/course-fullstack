const express = require("express");
const router = express.Router();
const AbsensiModel = require("../models/absensi");
const dateCheck = require("../utils/dateCheck");

// routing endpoint utama
router.get("/", async (req, res) => {
  const absensi = await AbsensiModel.findAll();
  res.status(200).json({
    absensi,
    metadata: "testing absensi endpoint",
  });
});

router.post("/checkin", async (req, res) => {
  const { nip, status } = req.body;

  try {
    const check = await dateCheck(nip, status);

    if (check.absensiData === null || check.statusCurrent === "in") {
      if (check.currentDate !== check.newDate) {
        const absensi = await AbsensiModel.create({
          users_nip: nip,
          status,
        });
        res.status(200).json({
          data: absensi,
          metadata: "checkin berhasil",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      error: "data invalid",
    });
  }
});

router.post("/checkout", async (req, res) => {
  const { nip, status } = req.body;

  try {
    const check = await dateCheck(nip, status);

    if (check.absensiData === null || check.statusCurrent === "out") {
      if (check.currentDate !== check.newDate) {
        const absensi = await AbsensiModel.create({
          users_nip: nip,
          status,
        });
        res.status(200).json({
          data: absensi,
          metadata: "checkout berhasil",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      error: "data invalid",
    });
  }
});

module.exports = router;
