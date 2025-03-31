# ForceNocAchWithdrawalRequestCreate

Request to force a Nacha notice of change (NOC) on a completed ACH withdrawal. FOR TESTING ONLY!

## Example Usage

```typescript
import { Code, ForceNocAchWithdrawalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceNocAchWithdrawalRequestCreate = {
  nachaNoc: {
    code: Code.C01,
  },
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `nachaNoc`                                                             | [components.NachaNocCreate](../../models/components/nachanoccreate.md) | :heavy_check_mark:                                                     | A notice of change (NOC) on an ACH transfer from the Nacha network.    |                                                                        |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the ACH withdrawal to force a Nacha NOC on.                | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726      |