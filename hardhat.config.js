/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
import "@nomiclabs/hardhat-ethers";

const { API_URL, PRIVATE_KEY } = process.env;

export const solidity = "0.8.7";
export const defaultNetwork = "goerli";
export const networks = {
  hardhat: {},
  goerli: {
    url: API_URL,
    accounts: [`0x${PRIVATE_KEY}`]
  }
};