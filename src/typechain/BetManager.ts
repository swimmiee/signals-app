/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface BetManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activateMarket"
      | "buyTokens"
      | "calculateBinCost"
      | "calculateXForBin"
      | "claimReward"
      | "closeMarket"
      | "collateralToken"
      | "createBatchMarkets"
      | "createMarket"
      | "deactivateMarket"
      | "getBinQuantitiesInRange"
      | "getBinQuantity"
      | "getLastClosedMarketId"
      | "getMarketInfo"
      | "lastClosedMarketId"
      | "marketCount"
      | "markets"
      | "owner"
      | "rangeBetToken"
      | "renounceOwnership"
      | "sellTokens"
      | "transferOwnership"
      | "withdrawAllCollateral"
      | "calculateBinSellCost"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CollateralWithdrawn"
      | "MarketClosed"
      | "MarketCreated"
      | "OwnershipTransferred"
      | "RewardClaimed"
      | "TokensBought"
      | "TokensSold"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "activateMarket",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokens",
    values: [BigNumberish, BigNumberish[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateBinCost",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateXForBin",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeMarket",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createBatchMarkets",
    values: [BigNumberish[], BigNumberish[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createMarket",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateMarket",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBinQuantitiesInRange",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBinQuantity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastClosedMarketId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastClosedMarketId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "markets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rangeBetToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellTokens",
    values: [BigNumberish, BigNumberish[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllCollateral",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateBinSellCost",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateBinCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateXForBin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createBatchMarkets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBinQuantitiesInRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBinQuantity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastClosedMarketId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastClosedMarketId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rangeBetToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sellTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateBinSellCost",
    data: BytesLike
  ): Result;
}

export namespace CollateralWithdrawnEvent {
  export type InputTuple = [to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [to: string, amount: bigint];
  export interface OutputObject {
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MarketClosedEvent {
  export type InputTuple = [marketId: BigNumberish, winningBin: BigNumberish];
  export type OutputTuple = [marketId: bigint, winningBin: bigint];
  export interface OutputObject {
    marketId: bigint;
    winningBin: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MarketCreatedEvent {
  export type InputTuple = [
    marketId: BigNumberish,
    tickSpacing: BigNumberish,
    minTick: BigNumberish,
    maxTick: BigNumberish,
    openTimestamp: BigNumberish,
    closeTimestamp: BigNumberish
  ];
  export type OutputTuple = [
    marketId: bigint,
    tickSpacing: bigint,
    minTick: bigint,
    maxTick: bigint,
    openTimestamp: bigint,
    closeTimestamp: bigint
  ];
  export interface OutputObject {
    marketId: bigint;
    tickSpacing: bigint;
    minTick: bigint;
    maxTick: bigint;
    openTimestamp: bigint;
    closeTimestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardClaimedEvent {
  export type InputTuple = [
    marketId: BigNumberish,
    claimer: AddressLike,
    binIndex: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    marketId: bigint,
    claimer: string,
    binIndex: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    marketId: bigint;
    claimer: string;
    binIndex: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensBoughtEvent {
  export type InputTuple = [
    marketId: BigNumberish,
    buyer: AddressLike,
    binIndices: BigNumberish[],
    amounts: BigNumberish[],
    totalCost: BigNumberish
  ];
  export type OutputTuple = [
    marketId: bigint,
    buyer: string,
    binIndices: bigint[],
    amounts: bigint[],
    totalCost: bigint
  ];
  export interface OutputObject {
    marketId: bigint;
    buyer: string;
    binIndices: bigint[];
    amounts: bigint[];
    totalCost: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensSoldEvent {
  export type InputTuple = [
    marketId: BigNumberish,
    seller: AddressLike,
    binIndices: BigNumberish[],
    amounts: BigNumberish[],
    totalProceeds: BigNumberish
  ];
  export type OutputTuple = [
    marketId: bigint,
    seller: string,
    binIndices: bigint[],
    amounts: bigint[],
    totalProceeds: bigint
  ];
  export interface OutputObject {
    marketId: bigint;
    seller: string;
    binIndices: bigint[];
    amounts: bigint[];
    totalProceeds: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BetManager extends BaseContract {
  connect(runner?: ContractRunner | null): BetManager;
  waitForDeployment(): Promise<this>;

  interface: BetManagerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  activateMarket: TypedContractMethod<
    [marketId: BigNumberish],
    [void],
    "nonpayable"
  >;

  buyTokens: TypedContractMethod<
    [
      marketId: BigNumberish,
      binIndices: BigNumberish[],
      amounts: BigNumberish[],
      maxCollateral: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  calculateBinCost: TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish, amount: BigNumberish],
    [bigint],
    "view"
  >;

  calculateXForBin: TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish, cost: BigNumberish],
    [bigint],
    "view"
  >;

  claimReward: TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  closeMarket: TypedContractMethod<
    [winningBin: BigNumberish],
    [void],
    "nonpayable"
  >;

  collateralToken: TypedContractMethod<[], [string], "view">;

  createBatchMarkets: TypedContractMethod<
    [
      tickSpacings: BigNumberish[],
      minTicks: BigNumberish[],
      maxTicks: BigNumberish[],
      closeTimes: BigNumberish[]
    ],
    [bigint[]],
    "nonpayable"
  >;

  createMarket: TypedContractMethod<
    [
      tickSpacing: BigNumberish,
      minTick: BigNumberish,
      maxTick: BigNumberish,
      _closeTime: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  deactivateMarket: TypedContractMethod<
    [marketId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getBinQuantitiesInRange: TypedContractMethod<
    [
      marketId: BigNumberish,
      fromBinIndex: BigNumberish,
      toBinIndex: BigNumberish
    ],
    [[bigint[], bigint[]] & { binIndices: bigint[]; quantities: bigint[] }],
    "view"
  >;

  getBinQuantity: TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish],
    [bigint],
    "view"
  >;

  getLastClosedMarketId: TypedContractMethod<[], [bigint], "view">;

  getMarketInfo: TypedContractMethod<
    [marketId: BigNumberish],
    [
      [
        boolean,
        boolean,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        active: boolean;
        closed: boolean;
        tickSpacing: bigint;
        minTick: bigint;
        maxTick: bigint;
        T: bigint;
        collateralBalance: bigint;
        winningBin: bigint;
        openTimestamp: bigint;
        closeTimestamp: bigint;
      }
    ],
    "view"
  >;

  lastClosedMarketId: TypedContractMethod<[], [bigint], "view">;

  marketCount: TypedContractMethod<[], [bigint], "view">;

  markets: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        boolean,
        boolean,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        active: boolean;
        closed: boolean;
        tickSpacing: bigint;
        minTick: bigint;
        maxTick: bigint;
        T: bigint;
        collateralBalance: bigint;
        winningBin: bigint;
        openTimestamp: bigint;
        closeTimestamp: bigint;
      }
    ],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  rangeBetToken: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  sellTokens: TypedContractMethod<
    [
      marketId: BigNumberish,
      binIndices: BigNumberish[],
      amounts: BigNumberish[],
      minCollateral: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawAllCollateral: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  calculateBinSellCost: TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish, amount: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "activateMarket"
  ): TypedContractMethod<[marketId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "buyTokens"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      binIndices: BigNumberish[],
      amounts: BigNumberish[],
      maxCollateral: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "calculateBinCost"
  ): TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish, amount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calculateXForBin"
  ): TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish, cost: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "claimReward"
  ): TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "closeMarket"
  ): TypedContractMethod<[winningBin: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "collateralToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "createBatchMarkets"
  ): TypedContractMethod<
    [
      tickSpacings: BigNumberish[],
      minTicks: BigNumberish[],
      maxTicks: BigNumberish[],
      closeTimes: BigNumberish[]
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createMarket"
  ): TypedContractMethod<
    [
      tickSpacing: BigNumberish,
      minTick: BigNumberish,
      maxTick: BigNumberish,
      _closeTime: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deactivateMarket"
  ): TypedContractMethod<[marketId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getBinQuantitiesInRange"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      fromBinIndex: BigNumberish,
      toBinIndex: BigNumberish
    ],
    [[bigint[], bigint[]] & { binIndices: bigint[]; quantities: bigint[] }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBinQuantity"
  ): TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLastClosedMarketId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMarketInfo"
  ): TypedContractMethod<
    [marketId: BigNumberish],
    [
      [
        boolean,
        boolean,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        active: boolean;
        closed: boolean;
        tickSpacing: bigint;
        minTick: bigint;
        maxTick: bigint;
        T: bigint;
        collateralBalance: bigint;
        winningBin: bigint;
        openTimestamp: bigint;
        closeTimestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "lastClosedMarketId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "marketCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "markets"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        boolean,
        boolean,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        active: boolean;
        closed: boolean;
        tickSpacing: bigint;
        minTick: bigint;
        maxTick: bigint;
        T: bigint;
        collateralBalance: bigint;
        winningBin: bigint;
        openTimestamp: bigint;
        closeTimestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rangeBetToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sellTokens"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      binIndices: BigNumberish[],
      amounts: BigNumberish[],
      minCollateral: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawAllCollateral"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "calculateBinSellCost"
  ): TypedContractMethod<
    [marketId: BigNumberish, binIndex: BigNumberish, amount: BigNumberish],
    [bigint],
    "view"
  >;

  getEvent(
    key: "CollateralWithdrawn"
  ): TypedContractEvent<
    CollateralWithdrawnEvent.InputTuple,
    CollateralWithdrawnEvent.OutputTuple,
    CollateralWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "MarketClosed"
  ): TypedContractEvent<
    MarketClosedEvent.InputTuple,
    MarketClosedEvent.OutputTuple,
    MarketClosedEvent.OutputObject
  >;
  getEvent(
    key: "MarketCreated"
  ): TypedContractEvent<
    MarketCreatedEvent.InputTuple,
    MarketCreatedEvent.OutputTuple,
    MarketCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RewardClaimed"
  ): TypedContractEvent<
    RewardClaimedEvent.InputTuple,
    RewardClaimedEvent.OutputTuple,
    RewardClaimedEvent.OutputObject
  >;
  getEvent(
    key: "TokensBought"
  ): TypedContractEvent<
    TokensBoughtEvent.InputTuple,
    TokensBoughtEvent.OutputTuple,
    TokensBoughtEvent.OutputObject
  >;
  getEvent(
    key: "TokensSold"
  ): TypedContractEvent<
    TokensSoldEvent.InputTuple,
    TokensSoldEvent.OutputTuple,
    TokensSoldEvent.OutputObject
  >;

  filters: {
    "CollateralWithdrawn(address,uint256)": TypedContractEvent<
      CollateralWithdrawnEvent.InputTuple,
      CollateralWithdrawnEvent.OutputTuple,
      CollateralWithdrawnEvent.OutputObject
    >;
    CollateralWithdrawn: TypedContractEvent<
      CollateralWithdrawnEvent.InputTuple,
      CollateralWithdrawnEvent.OutputTuple,
      CollateralWithdrawnEvent.OutputObject
    >;

    "MarketClosed(uint256,int256)": TypedContractEvent<
      MarketClosedEvent.InputTuple,
      MarketClosedEvent.OutputTuple,
      MarketClosedEvent.OutputObject
    >;
    MarketClosed: TypedContractEvent<
      MarketClosedEvent.InputTuple,
      MarketClosedEvent.OutputTuple,
      MarketClosedEvent.OutputObject
    >;

    "MarketCreated(uint256,uint256,int256,int256,uint256,uint256)": TypedContractEvent<
      MarketCreatedEvent.InputTuple,
      MarketCreatedEvent.OutputTuple,
      MarketCreatedEvent.OutputObject
    >;
    MarketCreated: TypedContractEvent<
      MarketCreatedEvent.InputTuple,
      MarketCreatedEvent.OutputTuple,
      MarketCreatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RewardClaimed(uint256,address,int256,uint256)": TypedContractEvent<
      RewardClaimedEvent.InputTuple,
      RewardClaimedEvent.OutputTuple,
      RewardClaimedEvent.OutputObject
    >;
    RewardClaimed: TypedContractEvent<
      RewardClaimedEvent.InputTuple,
      RewardClaimedEvent.OutputTuple,
      RewardClaimedEvent.OutputObject
    >;

    "TokensBought(uint256,address,int256[],uint256[],uint256)": TypedContractEvent<
      TokensBoughtEvent.InputTuple,
      TokensBoughtEvent.OutputTuple,
      TokensBoughtEvent.OutputObject
    >;
    TokensBought: TypedContractEvent<
      TokensBoughtEvent.InputTuple,
      TokensBoughtEvent.OutputTuple,
      TokensBoughtEvent.OutputObject
    >;

    "TokensSold(uint256,address,int256[],uint256[],uint256)": TypedContractEvent<
      TokensSoldEvent.InputTuple,
      TokensSoldEvent.OutputTuple,
      TokensSoldEvent.OutputObject
    >;
    TokensSold: TypedContractEvent<
      TokensSoldEvent.InputTuple,
      TokensSoldEvent.OutputTuple,
      TokensSoldEvent.OutputObject
    >;
  };
}
