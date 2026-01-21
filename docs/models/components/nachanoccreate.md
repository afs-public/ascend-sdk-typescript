# NachaNocCreate

A notice of change (NOC) on an ACH transfer from the Nacha network.

## Example Usage

```typescript
import { Code, NachaNocCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: NachaNocCreate = {
  code: Code.C01,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                    | [components.Code](../../models/components/code.md)                                                        | :heavy_check_mark:                                                                                        | The notice of change reason code.                                                                         | C01                                                                                                       |
| `updatedBankAccountNumber`                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The updated bank account number. Should only be set when the code is for an incorrect DFI account number. | 012345678                                                                                                 |
| `updatedBankAccountType`                                                                                  | [components.UpdatedBankAccountType](../../models/components/updatedbankaccounttype.md)                    | :heavy_minus_sign:                                                                                        | The updated bank account type. Should only be set when the code is for an incorrect transaction code.     | SAVINGS                                                                                                   |
| `updatedBankRoutingNumber`                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The updated bank routing number. Should only be set when the code is for an incorrect routing number.     | 100100123                                                                                                 |