# Assignment

When booked with a type of MOVEMENT, this subtype will remove an options position due to assignment. When booked with a type of TRADE, this subtype records the purchase/ sale of the underlying asset from the assignment of an options position

## Example Usage

```typescript
import { Assignment } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Assignment = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `capacity`                                                                             | [components.Capacity](../../models/components/capacity.md)                             | :heavy_minus_sign:                                                                     | Trade capacity type                                                                    | PRINCIPAL                                                                              |
| `optionAssetId`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | Records the asset_id of the option that was exercised or assigned                      | 500                                                                                    |
| `optionContractQuantity`                                                               | [components.OptionContractQuantity](../../models/components/optioncontractquantity.md) | :heavy_minus_sign:                                                                     | Records the number of contracts exercised or assigned                                  | {<br/>"value": "0.25"<br/>}                                                            |
| `optionDescription`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | Records the description of the option the account exercised or assigned                | AAPL 150 Call                                                                          |