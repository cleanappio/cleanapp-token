# KITN Disbursement Smart Contract

## Deploying the smart contract

1.  Run the command:
    ```
    npx hardhat run scripts/disburse_kitn.ts --network base-sepolia
    ```
2.  If the contract is successfully deployed you'll get the output:
    ```
    Contract deployed to address: 0x...
    ```
    Copy the address and keep it somewhere. You'll need it for further token disbursement configuration.

## Verifying the smart contract

Run the command:
```
npx hardhat verify --network base-sepolia <contract address>
```

## Accessing the smart contract with Go

The smart contract is to be exported into `.abi` and then the `.go` interface is to be exported. This interface is to be used in the backend for the smart contract communication.

By default you don't need to do it every time when you clone this repository or the backend repository, the `kitn_disbursement.go` is included into the backend. This guide might be needed when we'll have the next version of the smart contract. 

### Pre-requisites

Install abigen utility.

```
go install github.com/ethereum/go-ethereum/cmd/abigen@latest
```

### Steps

1.  Export the smart contract to abi format
    ```
    yarn run hardhat export-abi
    ```
1.  Convert `.abi` to `.go` interface
    ```
    mkdir -p go_disbursement
    abigen --abi abi/contracts/KitnDisbursement.sol/KitnDisbursement.json --pkg contract --type KitnDisbursement --out go_disbursement/kitn_disbursement.go
    ```
1.  Copy the `.go` to the `cleanapp_back_end_v2` repository. The directory in cleanapp_back_end_v2 is: `pipelines/disburse/contract/kitn_disbursement.go`

# Contract addresses on Lestnet
KITN treasure account and disburser owner: `0xF821AdA310c3c7DA23aBEa279bA5Bf22B359A7e1`
KITN minting contract: `0x7ccD117FC62B90C14a60eD821f55470B76cf7fb7`
KITN disbursing contract: `0x36791eD1D402ffF19b4CFBE6985d584066473E7D`