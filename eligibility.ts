import { Holder } from "../types";
import { CONFIG } from "../config";

export function eligibleHolders(holders: Holder[]): Holder[] {
  return holders.filter(h => h.balance >= CONFIG.MIN_BALANCE);
}