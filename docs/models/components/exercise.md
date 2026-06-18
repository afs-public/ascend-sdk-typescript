# Exercise

When booked with a type of MOVEMENT, this subtype will remove an options position due to exercise. When booked with a type of TRADE, this subtype records the purchase/ sale of the underlying asset from exercising an options position

## Example Usage

```typescript
import { Exercise } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Exercise = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `capacity`                                                                                       | [components.EntryCapacity](../../models/components/entrycapacity.md)                             | :heavy_minus_sign:                                                                               | Trade capacity type                                                                              | PRINCIPAL                                                                                        |
| `exerciseType`                                                                                   | [components.ExerciseType](../../models/components/exercisetype.md)                               | :heavy_minus_sign:                                                                               | Exercise type classification                                                                     | AUTO_EXERCISE                                                                                    |
| `optionAssetId`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | Records the asset_id of the option that was exercised or assigned                                | 500                                                                                              |
| `optionContractQuantity`                                                                         | [components.EntryOptionContractQuantity](../../models/components/entryoptioncontractquantity.md) | :heavy_minus_sign:                                                                               | Records the number of contracts exercised or assigned                                            | {<br/>"value": "0.25"<br/>}                                                                      |
| `optionDescription`                                                                              | *string*                                                                                         | :heavy_minus_sign:                                                                               | Records the description of the option the account exercised or assigned                          | This is the description of an option                                                             |