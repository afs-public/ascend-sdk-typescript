# SetAccountAccreditationTypeRequestCreate

Request for setting an account's accreditation type

## Example Usage

```typescript
import {
  SetAccountAccreditationTypeRequestCreate,
  SetAccountAccreditationTypeRequestCreateAccreditationType,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SetAccountAccreditationTypeRequestCreate = {
  accreditationType:
    SetAccountAccreditationTypeRequestCreateAccreditationType.NetWorthGt1M,
  name: "accounts/01JR8YQT40WAQT8S95ZQGS1QN0/accreditation",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accreditationType`                                                                                                                                          | [components.SetAccountAccreditationTypeRequestCreateAccreditationType](../../models/components/setaccountaccreditationtyperequestcreateaccreditationtype.md) | :heavy_check_mark:                                                                                                                                           | The new accreditation type for the specified account.                                                                                                        | NET_WORTH_GT_1M                                                                                                                                              |
| `name`                                                                                                                                                       | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The resource name of the account accreditation. Note `{account}` will be the `account_id` value.<br/><br/> Format: accounts/{account}/accreditation          | accounts/01JR8YQT40WAQT8S95ZQGS1QN0/accreditation                                                                                                            |