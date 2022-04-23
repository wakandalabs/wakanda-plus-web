/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Rewards, RewardsInterface } from "../Rewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IMintableERC20",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "promotionId",
        type: "uint256",
      },
    ],
    name: "PromotionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "promotionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "PromotionDestroyed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "promotionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "epochNumber",
        type: "uint8",
      },
    ],
    name: "PromotionEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "promotionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numberOfEpochs",
        type: "uint256",
      },
    ],
    name: "PromotionExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "promotionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "epochId",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsClaimed",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
    ],
    name: "claimReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_startTimestamp",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "_tokensPerEpoch",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "_epochDuration",
        type: "uint48",
      },
      {
        internalType: "uint8",
        name: "_numberOfEpochs",
        type: "uint8",
      },
    ],
    name: "createPromotion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "destroyPromotion",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "endPromotion",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_numberOfEpochs",
        type: "uint8",
      },
    ],
    name: "extendPromotion",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
    ],
    name: "getCurrentEpochId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
    ],
    name: "getPromotion",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "startTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint8",
            name: "numberOfEpochs",
            type: "uint8",
          },
          {
            internalType: "uint48",
            name: "epochDuration",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "createdAt",
            type: "uint48",
          },
          {
            internalType: "uint256",
            name: "tokensPerEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardsClaimed",
            type: "uint256",
          },
        ],
        internalType: "struct IRewards.Promotion",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_promotionId",
        type: "uint256",
      },
      {
        internalType: "uint8[]",
        name: "_epochIds",
        type: "uint8[]",
      },
    ],
    name: "getRewardsAmount",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IMintableERC20",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Rewards__factory {
  static readonly abi = _abi;
  static createInterface(): RewardsInterface {
    return new utils.Interface(_abi) as RewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Rewards {
    return new Contract(address, _abi, signerOrProvider) as Rewards;
  }
}
