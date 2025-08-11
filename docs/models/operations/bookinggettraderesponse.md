# BookingGetTradeResponse

## Example Usage

```typescript
import { BookingGetTradeResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingGetTradeResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `bookingTrade`                                                     | [components.BookingTrade](../../models/components/bookingtrade.md) | :heavy_minus_sign:                                                 | OK                                                                 |
| `status`                                                           | [components.Status](../../models/components/status.md)             | :heavy_minus_sign:                                                 | INVALID_ARGUMENT: The request is not valid.                        |