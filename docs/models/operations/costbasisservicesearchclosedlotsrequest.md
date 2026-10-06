# CostBasisServiceSearchClosedLotsRequest

## Example Usage

```typescript
import { CostBasisServiceSearchClosedLotsRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CostBasisServiceSearchClosedLotsRequest = {
  accountId: "01J71HKJ1K1GX5C0EWZ4BCPACB",
  searchClosedLotsRequestCreate: {
    parent: "accounts/01J71HKJ1K1GX5C0EWZ4BCPACB",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The account id.                                                                                      | 01J71HKJ1K1GX5C0EWZ4BCPACB                                                                           |
| `searchClosedLotsRequestCreate`                                                                      | [components.SearchClosedLotsRequestCreate](../../models/components/searchclosedlotsrequestcreate.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |