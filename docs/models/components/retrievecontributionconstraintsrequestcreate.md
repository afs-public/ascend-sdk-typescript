# RetrieveContributionConstraintsRequestCreate

Request to retrieve retirement contribution constraints

## Example Usage

```typescript
import { Mechanism, RetrieveContributionConstraintsRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveContributionConstraintsRequestCreate = {
  mechanism: Mechanism.Ach,
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `mechanism`                                                                                           | [components.Mechanism](../../models/components/mechanism.md)                                          | :heavy_check_mark:                                                                                    | Cash transfer mechanism to search constraints for                                                     | ACH                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Name of the account being queried, for retirement contribution constraints Format: accounts/{account} | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                   |