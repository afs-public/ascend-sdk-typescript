# OptionRootTradability

Indicators on an asset who has Options

## Example Usage

```typescript
import { OptionRootTradability } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionRootTradability = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `closeOptionsWholeQuantityEnabled`                                                  | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Indicates whether whole quantities are allowed to be closed for Options             | true                                                                                |
| `openNonstandardOptionsWholeQuantityEnabled`                                        | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Indicates whether whole quantities are allowed to be opened for nonstandard Options | true                                                                                |
| `openStandardOptionsWholeQuantityEnabled`                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Indicates whether whole quantities are allowed to be opened for standard Options    | true                                                                                |