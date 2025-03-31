# MutualFund

MutualFund specific asset details

## Example Usage

```typescript
import { MutualFund } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: MutualFund = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `fundFamily`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Name of the fund company                                                                           | SCHWAB                                                                                             |
| `largeOrderNotificationAmount`                                                                     | [components.LargeOrderNotificationAmount](../../models/components/largeordernotificationamount.md) | :heavy_minus_sign:                                                                                 | The threshold at which Apex would need to notify the fund family of an incoming large order.       | {<br/>"value": "10000.00"<br/>}                                                                    |
| `mutualFundType`                                                                                   | [components.MutualFundType](../../models/components/mutualfundtype.md)                             | :heavy_minus_sign:                                                                                 | Identifies type of mutual fund                                                                     | EQUITY                                                                                             |
| `shareClass`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Indicates the type and number of fees charged for the shares in a fund                             | SELECT                                                                                             |