# ExerciseServiceCreateOptionInstructionRequest

## Example Usage

```typescript
import { OptionInstructionCreateIdentifierType, OptionInstructionCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { ExerciseServiceCreateOptionInstructionRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: ExerciseServiceCreateOptionInstructionRequest = {
  accountId: "ACC123456",
  assetId: "12345",
  optionInstructionCreate: {
    accountId: "01JTNGZM8PWRR6MHBCC6TEG9HE",
    identifier: "AAPL250620P00090000",
    identifierType: OptionInstructionCreateIdentifierType.Osi,
    quantity: {},
    type: OptionInstructionCreateType.DoNotExercise,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | The account id.                                                                          | ACC123456                                                                                |
| `assetId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | The asset id.                                                                            | 12345                                                                                    |
| `optionInstructionCreate`                                                                | [components.OptionInstructionCreate](../../models/components/optioninstructioncreate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |