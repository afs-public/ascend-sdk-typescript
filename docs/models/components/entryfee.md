# EntryFee

Used to record Fees that have been assessed to account and capture details related to the fee

## Example Usage

```typescript
import { EntryFee } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryFee = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `additionalInstructions`                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Free form text field providing additional information about a transaction | Fee instruction                                                           |
| `type`                                                                    | [components.EntryFeeType](../../models/components/entryfeetype.md)        | :heavy_minus_sign:                                                        | Enum providing additional information about the type of fee being charged | LIQUIDITY                                                                 |