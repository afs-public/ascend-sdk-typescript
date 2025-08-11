# WatchlistMatchUpdateMatchState

The match state for a profile, one of:
- `MATCH_UNSPECIFIED` - Default/Null value.
- `CONFIRMED_MATCH` - Match is confirmed.
- `POTENTIAL_MATCH` - Match is a potential.
- `NO_MATCH` - Match is confirmed not to be a match.
- `INCONCLUSIVE` - Match is deemed to be inconclusive.

## Example Usage

```typescript
import { WatchlistMatchUpdateMatchState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WatchlistMatchUpdateMatchState =
  WatchlistMatchUpdateMatchState.ConfirmedMatch;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `MatchUnspecified`     | MATCH_UNSPECIFIED      |
| `ConfirmedMatch`       | CONFIRMED_MATCH        |
| `PotentialMatch`       | POTENTIAL_MATCH        |
| `NoMatch`              | NO_MATCH               |
| `Inconclusive`         | INCONCLUSIVE           |
| -                      | `Unrecognized<string>` |