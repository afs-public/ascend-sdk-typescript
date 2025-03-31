# AccountsCreateTrustedContactRequest

## Example Usage

```typescript
import { AccountsCreateTrustedContactRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsCreateTrustedContactRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  trustedContactCreate: {
    familyName: "Doe",
    givenName: "John",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The account id.                                                                    | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                                         |
| `trustedContactCreate`                                                             | [components.TrustedContactCreate](../../models/components/trustedcontactcreate.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |