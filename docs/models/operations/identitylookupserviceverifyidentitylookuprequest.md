# IdentityLookupServiceVerifyIdentityLookupRequest

## Example Usage

```typescript
import { IdentityLookupServiceVerifyIdentityLookupRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IdentityLookupServiceVerifyIdentityLookupRequest = {
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  identityLookupId: "01HEWVF4ZSNKYRP293J53ASJCJ",
  verifyIdentityLookupRequestCreate: {
    name:
      "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/identityLookups/01HEWVF4ZSNKYRP293J53ASJCJ",
    verificationCode: "123456",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The correspondent id.                                                                                        | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                                                   |
| `identityLookupId`                                                                                           | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The identityLookup id.                                                                                       | 01HEWVF4ZSNKYRP293J53ASJCJ                                                                                   |
| `verifyIdentityLookupRequestCreate`                                                                          | [components.VerifyIdentityLookupRequestCreate](../../models/components/verifyidentitylookuprequestcreate.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |