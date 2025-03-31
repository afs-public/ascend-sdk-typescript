# AccountsAddPartyRequest

## Example Usage

```typescript
import { RelationType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AccountsAddPartyRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsAddPartyRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  addPartyRequestCreate: {
    parent: "accounts/01HC3MAQ4DR9QN1V8MJ4CN1HMK",
    party: {
      emailAddress: "example@domain.com",
      mailingAddress: {},
      phoneNumber: {},
      relationType: RelationType.PrimaryOwner,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The account id.                                                                      | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                                           |
| `addPartyRequestCreate`                                                              | [components.AddPartyRequestCreate](../../models/components/addpartyrequestcreate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |