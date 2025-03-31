# UnitSplit

Used to record increases in the number of units outstanding through the issuing of more units to current shareholders and details related to the unit split

## Example Usage

```typescript
import { UnitSplit } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: UnitSplit = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `corporateActionGeneralInformation`                                                                                                      | [components.EntryUnitSplitCorporateActionGeneralInformation](../../models/components/entryunitsplitcorporateactiongeneralinformation.md) | :heavy_minus_sign:                                                                                                                       | Common fields for corporate actions                                                                                                      |                                                                                                                                          |
| `stockRate`                                                                                                                              | [components.EntryUnitSplitStockRate](../../models/components/entryunitsplitstockrate.md)                                                 | :heavy_minus_sign:                                                                                                                       | The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder       | {<br/>"value": "0.25"<br/>}                                                                                                              |