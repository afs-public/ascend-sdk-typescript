# WatchlistScreen

Indicates the current state of the watchlist screen

## Example Usage

```typescript
import { WatchlistScreen } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WatchlistScreen = WatchlistScreen.Failed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `ScreenStateUnspecified` | SCREEN_STATE_UNSPECIFIED |
| `Pending`                | PENDING                  |
| `Passed`                 | PASSED                   |
| `Failed`                 | FAILED                   |
| `NeedsReview`            | NEEDS_REVIEW             |
| `DeferredReview`         | DEFERRED_REVIEW          |
| `OutOfScope`             | OUT_OF_SCOPE             |
| -                        | `Unrecognized<string>`   |