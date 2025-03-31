# ActivityUnitSplit

Used to record increases in the number of units outstanding through the issuing of more units to current shareholders and details related to the unit split

## Example Usage

```typescript
import { ActivityUnitSplit } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityUnitSplit = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `corporateActionGeneralInformation`                                                                                                            | [components.ActivityUnitSplitCorporateActionGeneralInformation](../../models/components/activityunitsplitcorporateactiongeneralinformation.md) | :heavy_minus_sign:                                                                                                                             | Common fields for corporate actions                                                                                                            |                                                                                                                                                |
| `stockRate`                                                                                                                                    | [components.ActivityUnitSplitStockRate](../../models/components/activityunitsplitstockrate.md)                                                 | :heavy_minus_sign:                                                                                                                             | The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder             | {<br/>"value": "0.25"<br/>}                                                                                                                    |