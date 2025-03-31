# EndRestrictionRequestCreate

The request for ending a Restriction on an Account.

## Example Usage

```typescript
import { EndRestrictionRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EndRestrictionRequestCreate = {
  reason: "Reason for ending the restriction",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `reason`                           | *string*                           | :heavy_check_mark:                 | The reason to end the restriction. | Reason for ending the restriction  |