# VerifyIdentityLookupRequestCreate

Request message for VerifyIdentityLookup method

## Example Usage

```typescript
import { VerifyIdentityLookupRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: VerifyIdentityLookupRequestCreate = {
  name:
    "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/identityLookups/01HEWVF4ZSNKYRP293J53ASJCJ",
  verificationCode: "123456",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The name of the identity lookup to verify.                                           | correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/identityLookups/01HEWVF4ZSNKYRP293J53ASJCJ |
| `verificationCode`                                                                   | *string*                                                                             | :heavy_check_mark:                                                                   | The verification code to complete the identity lookup.                               | 123456                                                                               |