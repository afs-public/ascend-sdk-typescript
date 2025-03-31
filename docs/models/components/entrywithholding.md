# EntryWithholding

Used to record tax withholdings and details related to the withholding

## Example Usage

```typescript
import { EntryWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryWithholding = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `rate`                                                                               | [components.EntryWithholdingRate](../../models/components/entrywithholdingrate.md)   | :heavy_minus_sign:                                                                   | the rate will be converted to a percentage in the activity description               | {<br/>"value": "0.25"<br/>}                                                          |
| `regionCode`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | Two character region code, complies with https://cldr.unicode.org/index              | US                                                                                   |
| `state`                                                                              | [components.EntryWithholdingState](../../models/components/entrywithholdingstate.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  | WA                                                                                   |
| `taxYear`                                                                            | *number*                                                                             | :heavy_minus_sign:                                                                   | The tax year associated with the withholding                                         | 2024                                                                                 |
| `type`                                                                               | [components.EntryWithholdingType](../../models/components/entrywithholdingtype.md)   | :heavy_minus_sign:                                                                   | The type of withholding                                                              | WITHHOLDING                                                                          |