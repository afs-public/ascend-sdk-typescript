# RetrieveDistributionConstraintsRequestCreate

Request to retrieve retirement distribution constraints

## Example Usage

```typescript
import {
  RetrieveDistributionConstraintsRequestCreate,
  RetrieveDistributionConstraintsRequestCreateMechanism,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveDistributionConstraintsRequestCreate = {
  mechanism: RetrieveDistributionConstraintsRequestCreateMechanism.Ach,
  name: "accounts/01H8FM6EXVH77SAW3TC8KAWMES",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mechanism`                                                                                                                                          | [components.RetrieveDistributionConstraintsRequestCreateMechanism](../../models/components/retrievedistributionconstraintsrequestcreatemechanism.md) | :heavy_check_mark:                                                                                                                                   | Cash transfer mechanism to search constraints for                                                                                                    | ACH                                                                                                                                                  |
| `name`                                                                                                                                               | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Name of the account being queried, for retirement distribution constraints Format: accounts/{account}                                                | accounts/01H8FM6EXVH77SAW3TC8KAWMES                                                                                                                  |