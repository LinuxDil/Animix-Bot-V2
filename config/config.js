require("dotenv").config();
const { _isArray } = require("../utils.js");

const settings = {
  TIME_SLEEP: process.env.TIME_SLEEP ? parseInt(process.env.TIME_SLEEP) : 8,
  MAX_THEADS: process.env.MAX_THEADS ? parseInt(process.env.MAX_THEADS) : 10,
  MAX_THEADS_NO_PROXY: process.env.MAX_THEADS_NO_PROXY ? parseInt(process.env.MAX_THEADS_NO_PROXY) : 10,
  MAX_AMOUNT_GACHA: process.env.MAX_AMOUNT_GACHA ? parseInt(process.env.MAX_AMOUNT_GACHA) : 100,
  SKIP_PETS_DNA: process.env.SKIP_PETS_DNA ? JSON.parse(process.env.SKIP_PETS_DNA.replace(/'/g, '"')) : [],
  MAX_AMOUNT_ATTACK: process.env.MAX_AMOUNT_ATTACK ? parseInt(process.env.MAX_AMOUNT_ATTACK) : 100,
  SKIP_MISSIONS: process.env.SKIP_MISSIONS ? JSON.parse(process.env.SKIP_MISSIONS.replace(/'/g, '"')) : [],

  SKIP_TASKS: process.env.SKIP_TASKS ? JSON.parse(process.env.SKIP_TASKS.replace(/'/g, '"')) : [],
  AUTO_TASK: process.env.AUTO_TASK ? process.env.AUTO_TASK.toLowerCase() === "true" : false,
  AUTO_MERGE_PET: process.env.AUTO_MERGE_PET ? process.env.AUTO_MERGE_PET.toLowerCase() === "true" : false,
  AUTO_SHOW_COUNT_DOWN_TIME_SLEEP: process.env.AUTO_SHOW_COUNT_DOWN_TIME_SLEEP ? process.env.AUTO_SHOW_COUNT_DOWN_TIME_SLEEP.toLowerCase() === "true" : false,
  AUTO_CLAIM_BONUS: process.env.AUTO_CLAIM_BONUS ? process.env.AUTO_CLAIM_BONUS.toLowerCase() === "true" : false,
  ENABLE_ADVANCED_MERGE: process.env.ENABLE_ADVANCED_MERGE ? process.env.ENABLE_ADVANCED_MERGE.toLowerCase() === "true" : false,
  AUTO_PVP: process.env.AUTO_PVP ? process.env.AUTO_PVP.toLowerCase() === "true" : false,

  CONNECT_WALLET: process.env.CONNECT_WALLET ? process.env.CONNECT_WALLET.toLowerCase() === "true" : false,
  ADVANCED_ANTI_DETECTION: process.env.ADVANCED_ANTI_DETECTION ? process.env.ADVANCED_ANTI_DETECTION.toLowerCase() === "true" : false,
  ENABLE_DEBUG: process.env.ENABLE_DEBUG ? process.env.ENABLE_DEBUG.toLowerCase() === "true" : false,
  USE_PROXY: process.env.USE_PROXY ? process.env.USE_PROXY.toLowerCase() === "true" : false,

  API_ID: process.env.API_ID ? process.env.API_ID : null,

  BASE_URL: process.env.BASE_URL ? process.env.BASE_URL : "https://pro-api.animix.tech",
  DELAY_BETWEEN_REQUESTS: process.env.DELAY_BETWEEN_REQUESTS && _isArray(process.env.DELAY_BETWEEN_REQUESTS) ? JSON.parse(process.env.DELAY_BETWEEN_REQUESTS) : [1, 5],
  DELAY_START_BOT: process.env.DELAY_START_BOT && _isArray(process.env.DELAY_START_BOT) ? JSON.parse(process.env.DELAY_START_BOT) : [1, 15],
};

module.exports = settings;
