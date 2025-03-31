# ImmediateFamilyMemberCreate

Immediate Family Member detail.

## Example Usage

```typescript
import { ImmediateFamilyMemberCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ImmediateFamilyMemberCreate = {
  familyMemberName: "Ellen Chen",
  relationship: "Daughter",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `familyMemberName`                                                                        | *string*                                                                                  | :heavy_check_mark:                                                                        | The name of the immediate family member of the politically exposed person                 | Ellen Chen                                                                                |
| `relationship`                                                                            | *string*                                                                                  | :heavy_check_mark:                                                                        | The relationship of the immediate family member to the related politically exposed person | Daughter                                                                                  |