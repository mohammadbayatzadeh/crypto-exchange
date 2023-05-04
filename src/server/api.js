import axios from "axios";
import { Data } from "./data";
const base_url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true";

const Getdata = async () => {
  return Data;
};

export { Getdata };
