# AccountsReplacePartyRequest

## Example Usage

```typescript
import { RelationType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AccountsReplacePartyRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsReplacePartyRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  partyId: "8096110d-fb55-4f9d-b883-b84f0b70d3ea",
  replacePartyRequestCreate: {
    name:
      "accounts/01HC3MAQ4DR9QN1V8MJ4CN1HMK/parties/8096110d-fb55-4f9d-b883-b84f0b70d3ea",
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `accountId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The account id.                                                                              | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                                                   |
| `partyId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | The party id.                                                                                | 8096110d-fb55-4f9d-b883-b84f0b70d3ea                                                         |
| `replacePartyRequestCreate`                                                                  | [components.ReplacePartyRequestCreate](../../models/components/replacepartyrequestcreate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |