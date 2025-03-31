# RetrieveCashJournalConstraintsRequestCreate

Request to retrieve retirement constraints for two accounts in a cash journal transfer

## Example Usage

```typescript
import { RetrieveCashJournalConstraintsRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveCashJournalConstraintsRequestCreate = {
  destinationAccount: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  sourceAccount: "accounts/01H8FM6EXVH77SAW3TC8KAWMES",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `destinationAccount`                                 | *string*                                             | :heavy_check_mark:                                   | Destination account name for a cash journal transfer | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y                  |
| `sourceAccount`                                      | *string*                                             | :heavy_check_mark:                                   | Source account name for a cash journal transfer      | accounts/01H8FM6EXVH77SAW3TC8KAWMES                  |