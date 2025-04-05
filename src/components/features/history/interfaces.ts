interface PredictionBase {
  id: number;
  range: string;
  avg: string;
  bet: string;
  value: string;
  toWin?: string;
  date: string;
  result: "Win" | "Loss" | null;
  shares: string;
}
export interface LivePrediction extends PredictionBase {
  id: number;
  range: string;
  avg: string;
  bet: string;
  value: string;
  toWin: string;
  date: string;
  result: null;
  shares: string;
}
export interface EndedPrediction extends PredictionBase {
  id: number;
  range: string;
  avg: string;
  bet: string;
  value: string;
  date: string;
  result: "Win" | "Loss";
  shares: string;
}

export interface PredictionSummary {
  positionValue: string;
  profitAndLoss: string;
  volumeTraded: string;
  predictionCount: string;
}

// TokensBoughtEvent
// event TokensBought(uint256 indexed marketId, address indexed buyer, int256[] binIndices, uint256[] amounts, uint256 totalCost);
export interface PredictionLog {
  marketId: number;
  buyer: string;
  binIndices: number[];
  amounts: bigint[];
  totalCost: bigint;
}
