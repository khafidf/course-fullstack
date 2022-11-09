const AbsensiModel = require("../models/absensi");

const dateCheck = async (nip, status) => {
  const absensiData = await AbsensiModel.findOne({
    where: { users_nip: nip, status: status },
    order: [["createdAt", "DESC"]],
  });
  const currentDate =
    absensiData === null
      ? null
      : new Date(absensiData.createdAt).toLocaleString(["ban", "id"], {
          day: "numeric",
        });
  const newDate = new Date().toLocaleString(["ban", "id"], { day: "numeric" });
  const statusCurrent = absensiData === null ? null : await status;

  return { absensiData, currentDate, newDate, statusCurrent };
};

module.exports = dateCheck;
