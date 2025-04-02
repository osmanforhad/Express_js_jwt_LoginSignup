import crypto from "crypto"; //its a node js built in library

//script for Generate Random secrate key
const secrateKey = crypto.randomBytes(32).toString("hex");

export default secrateKey;
