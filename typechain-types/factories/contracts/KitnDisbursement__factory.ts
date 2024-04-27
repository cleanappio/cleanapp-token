/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  KitnDisbursement,
  KitnDisbursementInterface,
} from "../../contracts/KitnDisbursement";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "result",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct KitnDisbursement.CoinsSpendResult[]",
        name: "results",
        type: "tuple[]",
      },
    ],
    name: "CoinsSpent",
    type: "event",
  },
  {
    inputs: [],
    name: "KITN_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getKitnBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWalletBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kitnToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_receivers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "spendCoins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferKitnToMe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405273e5a0f6bccbf606718d3e7844e64bf9c34727ea336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561006457600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611174806100b56000396000f3fe6080604052600436106100745760003560e01c80634328ec1d1161004e5780634328ec1d1461018f5780638da5cb5b146101ba578063961e681a146101e5578063de5d801b146102105761010b565b80632130d89c14610110578063329a27e71461013957806332ac6a09146101645761010b565b3661010b57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610109576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610100906109a8565b60405180910390fd5b005b600080fd5b34801561011c57600080fd5b5061013760048036038101906101329190610a8d565b610239565b005b34801561014557600080fd5b5061014e6106b0565b60405161015b9190610b27565b60405180910390f35b34801561017057600080fd5b506101796106b8565b6040516101869190610b27565b60405180910390f35b34801561019b57600080fd5b506101a461075a565b6040516101b19190610b83565b60405180910390f35b3480156101c657600080fd5b506101cf610772565b6040516101dc9190610b83565b60405180910390f35b3480156101f157600080fd5b506101fa610798565b6040516102079190610bfd565b60405180910390f35b34801561021c57600080fd5b5061023760048036038101906102329190610c44565b6107bc565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c0906109a8565b60405180910390fd5b818190508484905014610311576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030890610ce3565b60405180910390fd5b60008484905067ffffffffffffffff8111156103305761032f610d03565b5b60405190808252806020026020018201604052801561036957816020015b610356610912565b81526020019060019003908161034e5790505b5090506000805b868690508110156103b55784848281811061038e5761038d610d32565b5b90506020020135826103a09190610d90565b915080806103ad90610dc4565b915050610370565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161040f9190610b83565b602060405180830381865afa15801561042c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104509190610e21565b811115610492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048990610ec0565b60405180910390fd5b60005b86869050811015610670578686828181106104b3576104b2610d32565b5b90506020020160208101906104c89190610f0c565b8382815181106104db576104da610d32565b5b60200260200101516000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084848281811061052c5761052b610d32565b5b9050602002013583828151811061054657610545610d32565b5b6020026020010151602001818152505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8888848181106105a5576105a4610d32565b5b90506020020160208101906105ba9190610f0c565b8787858181106105cd576105cc610d32565b5b905060200201356040518363ffffffff1660e01b81526004016105f1929190610f39565b6020604051808303816000875af1158015610610573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106349190610f9a565b83828151811061064757610646610d32565b5b60200260200101516040019015159081151581525050808061066890610dc4565b915050610495565b507f1eb24303909b1ded9e9db3acc7cbaf2ee89f6169ec0b0853fe0f4c0052e601b2826040516106a091906110e5565b60405180910390a1505050505050565b600047905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107149190610b83565b602060405180830381865afa158015610731573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107559190610e21565b905090565b73e5a0f6bccbf606718d3e7844e64bf9c34727ea3381565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461084c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610843906109a8565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1630846040518463ffffffff1660e01b81526004016108cb93929190611107565b6020604051808303816000875af11580156108ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090e9190610f9a565b5050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b600082825260208201905092915050565b7f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000600082015250565b600061099260178361094b565b915061099d8261095c565b602082019050919050565b600060208201905081810360008301526109c181610985565b9050919050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126109f7576109f66109d2565b5b8235905067ffffffffffffffff811115610a1457610a136109d7565b5b602083019150836020820283011115610a3057610a2f6109dc565b5b9250929050565b60008083601f840112610a4d57610a4c6109d2565b5b8235905067ffffffffffffffff811115610a6a57610a696109d7565b5b602083019150836020820283011115610a8657610a856109dc565b5b9250929050565b60008060008060408587031215610aa757610aa66109c8565b5b600085013567ffffffffffffffff811115610ac557610ac46109cd565b5b610ad1878288016109e1565b9450945050602085013567ffffffffffffffff811115610af457610af36109cd565b5b610b0087828801610a37565b925092505092959194509250565b6000819050919050565b610b2181610b0e565b82525050565b6000602082019050610b3c6000830184610b18565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b6d82610b42565b9050919050565b610b7d81610b62565b82525050565b6000602082019050610b986000830184610b74565b92915050565b6000819050919050565b6000610bc3610bbe610bb984610b42565b610b9e565b610b42565b9050919050565b6000610bd582610ba8565b9050919050565b6000610be782610bca565b9050919050565b610bf781610bdc565b82525050565b6000602082019050610c126000830184610bee565b92915050565b610c2181610b0e565b8114610c2c57600080fd5b50565b600081359050610c3e81610c18565b92915050565b600060208284031215610c5a57610c596109c8565b5b6000610c6884828501610c2f565b91505092915050565b7f41206e756d626572206f6620726563656976657273206d75737420626520657160008201527f75616c20746f2061206e756d626572206f6620616d6f756e7473000000000000602082015250565b6000610ccd603a8361094b565b9150610cd882610c71565b604082019050919050565b60006020820190508181036000830152610cfc81610cc0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d9b82610b0e565b9150610da683610b0e565b9250828201905080821115610dbe57610dbd610d61565b5b92915050565b6000610dcf82610b0e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e0157610e00610d61565b5b600182019050919050565b600081519050610e1b81610c18565b92915050565b600060208284031215610e3757610e366109c8565b5b6000610e4584828501610e0c565b91505092915050565b7f4e6f7420656e6f756768204b49544e73206f6e2074686520636f6e747261637460008201527f20746f20636f6d706c6574652074686520626174636800000000000000000000602082015250565b6000610eaa60368361094b565b9150610eb582610e4e565b604082019050919050565b60006020820190508181036000830152610ed981610e9d565b9050919050565b610ee981610b62565b8114610ef457600080fd5b50565b600081359050610f0681610ee0565b92915050565b600060208284031215610f2257610f216109c8565b5b6000610f3084828501610ef7565b91505092915050565b6000604082019050610f4e6000830185610b74565b610f5b6020830184610b18565b9392505050565b60008115159050919050565b610f7781610f62565b8114610f8257600080fd5b50565b600081519050610f9481610f6e565b92915050565b600060208284031215610fb057610faf6109c8565b5b6000610fbe84828501610f85565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ffc81610b62565b82525050565b61100b81610b0e565b82525050565b61101a81610f62565b82525050565b6060820160008201516110366000850182610ff3565b5060208201516110496020850182611002565b50604082015161105c6040850182611011565b50505050565b600061106e8383611020565b60608301905092915050565b6000602082019050919050565b600061109282610fc7565b61109c8185610fd2565b93506110a783610fe3565b8060005b838110156110d85781516110bf8882611062565b97506110ca8361107a565b9250506001810190506110ab565b5085935050505092915050565b600060208201905081810360008301526110ff8184611087565b905092915050565b600060608201905061111c6000830186610b74565b6111296020830185610b74565b6111366040830184610b18565b94935050505056fea264697066735822122075656741ae4d4d559c0a0f10e1b201d8366e183bda981c92be52636ce3e7bb7864736f6c63430008140033";

type KitnDisbursementConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KitnDisbursementConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KitnDisbursement__factory extends ContractFactory {
  constructor(...args: KitnDisbursementConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      KitnDisbursement & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): KitnDisbursement__factory {
    return super.connect(runner) as KitnDisbursement__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KitnDisbursementInterface {
    return new Interface(_abi) as KitnDisbursementInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): KitnDisbursement {
    return new Contract(address, _abi, runner) as unknown as KitnDisbursement;
  }
}
