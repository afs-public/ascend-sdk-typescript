# RetirementConstraintsRetrieveDistributionConstraintsRequest

## Example Usage

```typescript
import { RetrieveDistributionConstraintsRequestCreateMechanism } from "@apexfintechsolutions/ascend-sdk/models/components";
import { RetirementConstraintsRetrieveDistributionConstraintsRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: RetirementConstraintsRetrieveDistributionConstraintsRequest = {
  accountId: "01H8FM6EXVH77SAW3TC8KAWMES",
  retrieveDistributionConstraintsRequestCreate: {
    mechanism: RetrieveDistributionConstraintsRequestCreateMechanism.Ach,
    name: "accounts/01H8FM6EXVH77SAW3TC8KAWMES",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The account id.                                                                                                                    | 01H8FM6EXVH77SAW3TC8KAWMES                                                                                                         |
| `retrieveDistributionConstraintsRequestCreate`                                                                                     | [components.RetrieveDistributionConstraintsRequestCreate](../../models/components/retrievedistributionconstraintsrequestcreate.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |