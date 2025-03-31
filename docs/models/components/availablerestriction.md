# AvailableRestriction

Available Restriction on an Account.

## Example Usage

```typescript
import { AvailableRestriction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AvailableRestriction = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | The description of the restriction.                                            | A full outbound transfer of assets was initiated through ACATS or other means. |
| `displayName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | The human readable representation of the restriction code.                     | Account Transfer Request Received - Full Outbound                              |
| `restrictionCode`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | The restriction code.                                                          | ACAT_FULL_OUTBOUND                                                             |