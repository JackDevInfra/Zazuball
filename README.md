![Pumpball](pumpball.png)

# Pumpball

Pumpball is a deterministic distribution mechanism built for pumpfun-style tokens.

The system continuously monitors holder balances, enforces a minimum eligibility threshold, and executes recurring randomized reward selection without staking, snapshots, claim windows, or manual intervention.

Pumpball is designed to convert ongoing on-chain activity into proportional token flow back to committed holders.

## Concept

Traditional holder rewards rely on static snapshots or discretionary logic.
Pumpball operates on a rolling state model.

At a fixed interval, the protocol:
- Identifies all holders above a defined balance threshold
- Randomly selects a fixed subset of eligible holders
- Distributes rewards evenly among selected participants
- Resets nothing and accumulates no advantage for timing

This ensures participation is continuous rather than opportunistic.

## Design Goals

- No staking
- No claim windows
- No snapshots
- No discretionary logic
- Fully deterministic execution loop
- Transparent selection process
- Minimal surface area

## Eligibility Model

Eligibility is defined strictly by balance.

Holders must maintain a minimum token balance to remain in the eligible set.
Eligibility is recalculated continuously and does not rely on historical snapshots.

## Selection Model

At each interval, a pseudo-random selection process chooses a fixed number of eligible holders.

Selection is stateless.
Past selection does not influence future selection.
Each interval is independent.

## Distribution Model

Rewards are distributed evenly across selected holders.
No weighting.
No compounding.
No decay.

## Interval Execution

The system operates on a fixed schedule.
Default interval is ten minutes.

Intervals are deterministic and auditable.

## Architecture Overview

- State tracking layer
- Eligibility filter
- Random selection engine
- Distribution executor
- Interval scheduler

## Disclaimer

This repository provides reference logic only.
On-chain execution requires proper auditing and adaptation.

