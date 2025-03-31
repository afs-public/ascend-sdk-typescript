# RetirementConstraintsRetrieveContributionConstraintsRequest

## Example Usage

```typescript
import { Mechanism } from "@apexfintechsolutions/ascend-sdk/models/components";
import { RetirementConstraintsRetrieveContributionConstraintsRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: RetirementConstraintsRetrieveContributionConstraintsRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  retrieveContributionConstraintsRequestCreate: {
    mechanism: Mechanism.Ach,
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The account id.                                                                                                                    | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                                         |
| `retrieveContributionConstraintsRequestCreate`                                                                                     | [components.RetrieveContributionConstraintsRequestCreate](../../models/components/retrievecontributionconstraintsrequestcreate.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |