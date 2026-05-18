# ForeignBondTradingDetail

Foreign bond trading detail

## Example Usage

```typescript
import { ForeignBondTradingDetail } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForeignBondTradingDetail = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `percentage`                                                                                           | [components.Percentage](../../models/components/percentage.md)                                         | :heavy_minus_sign:                                                                                     | The percentage of the account's trades which will involve foreign bond                                 | {<br/>"value": "90.2"<br/>}                                                                            |
| `regionCode`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The region where the foreign bond trading activity is taking place. Must be a two-character CLDR code. | CA                                                                                                     |