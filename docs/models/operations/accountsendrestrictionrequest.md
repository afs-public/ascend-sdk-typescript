# AccountsEndRestrictionRequest

## Example Usage

```typescript
import { AccountsEndRestrictionRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsEndRestrictionRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  restrictionId: "FRAUD_SUSPENDED_BY_CORRESPONDENT",
  endRestrictionRequestCreate: {
    reason: "Reason for ending the restriction",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The account id.                                                                                  | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                                                       |
| `restrictionId`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | The restriction id.                                                                              | FRAUD_SUSPENDED_BY_CORRESPONDENT                                                                 |
| `endRestrictionRequestCreate`                                                                    | [components.EndRestrictionRequestCreate](../../models/components/endrestrictionrequestcreate.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |