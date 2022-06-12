const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let x = await promiseTheaterIXX();
  let y = await promiseTheaterVGC();
  const nilaibaru = (await x).concat(await y);
  // return nilaibaru.filter((arr) => arr.hasil === emosi);
  return nilaibaru.filter((arr) => arr.hasil === emosi).length;
  // return console.log(arrFilm);
};

module.exports = {
  promiseOutput,
};
