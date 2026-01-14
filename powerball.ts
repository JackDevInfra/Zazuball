import { Holder } from "../types";
import { randomIndex } from "./rng";
import { CONFIG } from "../config";

export function selectWinners(holders: Holder[]): Holder[] {
  const selected: Holder[] = [];
  const pool = [...holders];

  while (selected.length < CONFIG.SELECTION_COUNT && pool.length > 0) {
    const idx = randomIndex(pool.length);
    selected.push(pool.splice(idx, 1)[0]);
  }

  return selected;
}