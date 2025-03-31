# WatchlistMatchUpdate

Matched profile details

## Example Usage

```typescript
import { WatchlistMatchUpdate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WatchlistMatchUpdate = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `excludeFromScreening`                                                                                 | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Identifies that a confirmed watchlist match can be excluded when calculating the related screen state  | false                                                                                                  |
| `matchState`                                                                                           | [components.WatchlistMatchUpdateMatchState](../../models/components/watchlistmatchupdatematchstate.md) | :heavy_minus_sign:                                                                                     | Match state - whether or not the match is confirmed                                                    | CONFIRMED_MATCH                                                                                        |
| `watchlistId`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Indicates the watchlist source for a given match                                                       | DOWJONES                                                                                               |
| `watchlistItemId`                                                                                      | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Identification number for the watchlist item that was matched                                          | 123456                                                                                                 |