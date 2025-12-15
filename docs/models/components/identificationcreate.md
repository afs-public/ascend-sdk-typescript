# IdentificationCreate

Represents an identification document

## Example Usage

```typescript
import { IdentificationCreate, IdentificationCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentificationCreate = {
  regionCode: "US",
  type: IdentificationCreateType.Ssn,
  value: "123-45-6789",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `regionCode`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | CLDR format                                                                                | US                                                                                         |
| `type`                                                                                     | [components.IdentificationCreateType](../../models/components/identificationcreatetype.md) | :heavy_check_mark:                                                                         | The type of identification document                                                        | SSN                                                                                        |
| `value`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | The value of the identification document                                                   | 123-45-6789                                                                                |