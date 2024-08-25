import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();
require('hardhat-abi-exporter');
require("@nomicfoundation/hardhat-toolbox")

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.20',
  },
  networks: {
    // for sepolia testnet
    'base-sepolia': {
      url: 'https://sepolia.base.org',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    // for lestnet
    'lestnet': {
      url: 'https://service.lestnet.org',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
  },
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: {
      "base-sepolia": process.env.BASESCAN_API_KEY as string,
      "lestnet": "dummy",
    },
    customChains: [
      {
        network: 'base-sepolia',
        chainId: 84532,
        urls: {
          apiURL: 'https://api-sepolia.basescan.org/api',
          browserURL: 'https://sepolia.basescan.org'
        }
      },
      {
        network: 'lestnet',
        chainId: 21363,
        urls: {
          apiURL: 'https://explore.lestnet.org/api',
          browserURL: 'https://explore.lestnet.org'
        }
      }
    ]
  },
  sourcify: {
    enabled: false
  },
  abiExporter: {
    path: './abi',
    runOnCompile: true,
    clear: true,
    spacing: 2,
  }
};

export default config;