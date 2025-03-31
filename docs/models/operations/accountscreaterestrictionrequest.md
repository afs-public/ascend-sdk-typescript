# AccountsCreateRestrictionRequest

## Example Usage

```typescript
import { AccountsCreateRestrictionRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsCreateRestrictionRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  restrictionCreate: {
    createReason: "Some reason for creating",
    restrictionCode: "MARGIN_CALL_VIOLATION_REG_T",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | The account id.                                                              | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                                   |
| `restrictionCreate`                                                          | [components.RestrictionCreate](../../models/components/restrictioncreate.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |