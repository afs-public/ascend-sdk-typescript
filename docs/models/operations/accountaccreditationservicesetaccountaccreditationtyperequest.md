# AccountAccreditationServiceSetAccountAccreditationTypeRequest

## Example Usage

```typescript
import { SetAccountAccreditationTypeRequestCreateAccreditationType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AccountAccreditationServiceSetAccountAccreditationTypeRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountAccreditationServiceSetAccountAccreditationTypeRequest = {
  accountId: "01JR8YQT40WAQT8S95ZQGS1QN0",
  setAccountAccreditationTypeRequestCreate: {
    accreditationType:
      SetAccountAccreditationTypeRequestCreateAccreditationType.NetWorthGt1M,
    name: "accounts/01JR8YQT40WAQT8S95ZQGS1QN0/accreditation",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The account id.                                                                                                            | 01JR8YQT40WAQT8S95ZQGS1QN0                                                                                                 |
| `setAccountAccreditationTypeRequestCreate`                                                                                 | [components.SetAccountAccreditationTypeRequestCreate](../../models/components/setaccountaccreditationtyperequestcreate.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |