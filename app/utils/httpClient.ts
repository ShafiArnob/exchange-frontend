import axios from "axios";
import { Depth, KLine, Ticker, Trade } from "./types";

const BASE_URL = "https://exchange-proxy.100xdevs.com/api/v1";

export async function getTicker(market: string): Promise<Ticker> {
  const tickers = await getTickers();
  const ticker = tickers.find((t) => t.symbol === market);
  if (!ticker) {
    throw new Error(`No ticker found for ${market}`);
  }
  return ticker;
}
// const x = getTickers();

export async function getTickers(): Promise<Ticker[]> {
  const response = await axios.get(`${BASE_URL}/tickers`);
  console.log(response);
  return response.data;
}
