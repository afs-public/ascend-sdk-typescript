# IdentityLookupServiceCreateIdentityLookupRequest

## Example Usage

```typescript
import { IdentificationCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { IdentityLookupServiceCreateIdentityLookupRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IdentityLookupServiceCreateIdentityLookupRequest = {
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  identityLookupCreate: {
    deviceMetadata: {
      ipAddress: "203.0.113.42",
    },
    identification: {
      regionCode: "US",
      type: IdentificationCreateType.Ssn,
      value: "123-45-6789",
    },
    phoneNumber: {},
    userConsent: true,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `correspondentId`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | The correspondent id.                                                              | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                         |
| `identityLookupCreate`                                                             | [components.IdentityLookupCreate](../../models/components/identitylookupcreate.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |