# BankAccount

The bank account for the relationship. This field must be set on create requests **except** when using the `PLAID_TOKEN` verification method. In which case, the bank account will be retrieved by the service based on the `plaid_processor_token`.

## Example Usage

```typescript
import { BankAccount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BankAccount = null;
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountNumber`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The bank account number. This value will be masked in responses.                   | 100100123                                                                          |
| `owner`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | The name of the bank account owner.                                                | John Doe                                                                           |
| `routingNumber`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The bank routing number (either ABA or BIC).                                       | 1.2345678e+07                                                                      |
| `type`                                                                             | [components.BankRelationshipType](../../models/components/bankrelationshiptype.md) | :heavy_minus_sign:                                                                 | The bank account type.                                                             | CHECKING                                                                           |