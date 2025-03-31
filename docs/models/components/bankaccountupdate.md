# BankAccountUpdate

A representation of a bank account.

## Example Usage

```typescript
import { BankAccountUpdate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BankAccountUpdate = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountNumber`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | The bank account number. This value will be masked in responses.                     | 100100123                                                                            |
| `owner`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | The name of the bank account owner.                                                  | John Doe                                                                             |
| `routingNumber`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | The bank routing number (either ABA or BIC).                                         | 1.2345678e+07                                                                        |
| `type`                                                                               | [components.BankAccountUpdateType](../../models/components/bankaccountupdatetype.md) | :heavy_minus_sign:                                                                   | The bank account type.                                                               | CHECKING                                                                             |