# AccountsCreateInterestedPartyRequest

## Example Usage

```typescript
import { AccountsCreateInterestedPartyRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsCreateInterestedPartyRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  interestedPartyCreate: {
    mailingAddress: {},
    recipient: "John Dough",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The account id.                                                                      | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                                           |
| `interestedPartyCreate`                                                              | [components.InterestedPartyCreate](../../models/components/interestedpartycreate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |