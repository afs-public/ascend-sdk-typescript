# ForceNocAchDepositRequestCreate

Request to force a Nacha notice of change (NOC) on a completed ACH deposit. FOR TESTING ONLY!

## Example Usage

```typescript
import { Code, ForceNocAchDepositRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceNocAchDepositRequestCreate = {
  nachaNoc: {
    code: Code.C01,
  },
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `nachaNoc`                                                             | [components.NachaNocCreate](../../models/components/nachanoccreate.md) | :heavy_check_mark:                                                     | A notice of change (NOC) on an ACH transfer from the Nacha network.    |                                                                        |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the ACH deposit to force a Nacha NOC on.                   | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319         |