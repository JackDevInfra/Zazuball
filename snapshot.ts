import { Holder } from "../types";

export function snapshotState(holders: Holder[]): Holder[] {
  return [...holders];
}