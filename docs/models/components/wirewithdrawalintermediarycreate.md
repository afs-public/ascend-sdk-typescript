# WireWithdrawalIntermediaryCreate

An intermediary party

## Example Usage

```typescript
import { WireWithdrawalIntermediaryCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalIntermediaryCreate = {
  account: "NL02ABNA0123456789",
  accountTitle: "Jane Dough",
  address: {},
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `account`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | The account number of the intermediary party                                              | NL02ABNA0123456789                                                                        |
| `accountTitle`                                                                            | *string*                                                                                  | :heavy_check_mark:                                                                        | The name of the intermediary party                                                        | Jane Dough                                                                                |
| `address`                                                                                 | [components.AddressCreate](../../models/components/addresscreate.md)                      | :heavy_check_mark:                                                                        | The data structure containing attributes describing the location of an underlying entity. |                                                                                           |