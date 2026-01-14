import { CONFIG } from "../config";
import { fetchHolders } from "../state/holders";
import { eligibleHolders } from "../state/eligibility";
import { selectWinners } from "../selection/powerball";
import { distribute } from "../selection/distribution";

export function startScheduler(): void {
  setInterval(runCycle, CONFIG.INTERVAL_MS);
}

function runCycle(): void {
  const holders = fetchHolders();
  const eligible = eligibleHolders(holders);
  const winners = selectWinners(eligible);
  distribute(winners);
}