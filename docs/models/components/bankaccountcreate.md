# BankAccountCreate

A representation of a bank account.

## Example Usage

```typescript
import { BankAccountCreate, BankAccountCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BankAccountCreate = {
  accountNumber: "100100123",
  owner: "John Doe",
  routingNumber: "12345678",
  type: BankAccountCreateType.Checking,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountNumber`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | The bank account number. This value will be masked in responses.                     | 100100123                                                                            |
| `owner`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | The name of the bank account owner.                                                  | John Doe                                                                             |
| `routingNumber`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | The bank routing number (either ABA or BIC).                                         | 1.2345678e+07                                                                        |
| `type`                                                                               | [components.BankAccountCreateType](../../models/components/bankaccountcreatetype.md) | :heavy_check_mark:                                                                   | The bank account type.                                                               | CHECKING                                                                             |