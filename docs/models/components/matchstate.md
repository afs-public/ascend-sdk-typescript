# MatchState

Match state - whether or not the match is confirmed

## Example Usage

```typescript
import { MatchState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: MatchState = MatchState.ConfirmedMatch;
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