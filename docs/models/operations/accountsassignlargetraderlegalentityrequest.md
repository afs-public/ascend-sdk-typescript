# AccountsAssignLargeTraderLegalEntityRequest

## Example Usage

```typescript
import { AccountsAssignLargeTraderLegalEntityRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsAssignLargeTraderLegalEntityRequest = {
  legalEntityId: "e6716139-da77-46d1-9f15-13599161db0b",
  assignLargeTraderRequestCreate: {
    largeTraderId: "1234567890",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `legalEntityId`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | The legalEntity id.                                                                                    | e6716139-da77-46d1-9f15-13599161db0b                                                                   |
| `assignLargeTraderRequestCreate`                                                                       | [components.AssignLargeTraderRequestCreate](../../models/components/assignlargetraderrequestcreate.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |