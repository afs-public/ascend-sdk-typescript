# CostBasisServiceSearchOpenLotsRequest

## Example Usage

```typescript
import { CostBasisServiceSearchOpenLotsRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CostBasisServiceSearchOpenLotsRequest = {
  accountId: "01J71HKJ1K1GX5C0EWZ4BCPACB",
  searchOpenLotsRequestCreate: {
    parent: "accounts/01J71HKJ1K1GX5C0EWZ4BCPACB",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The account id.                                                                                  | 01J71HKJ1K1GX5C0EWZ4BCPACB                                                                       |
| `searchOpenLotsRequestCreate`                                                                    | [components.SearchOpenLotsRequestCreate](../../models/components/searchopenlotsrequestcreate.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |