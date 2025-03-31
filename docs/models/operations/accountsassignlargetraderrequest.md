# AccountsAssignLargeTraderRequest

## Example Usage

```typescript
import { AccountsAssignLargeTraderRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsAssignLargeTraderRequest = {
  legalNaturalPersonId: "e6716139-da77-46d1-9f15-13599161db0b",
  assignLargeTraderRequestCreate: {
    largeTraderId: "1234567890",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `legalNaturalPersonId`                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The legalNaturalPerson id.                                                                             | e6716139-da77-46d1-9f15-13599161db0b                                                                   |
| `assignLargeTraderRequestCreate`                                                                       | [components.AssignLargeTraderRequestCreate](../../models/components/assignlargetraderrequestcreate.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |