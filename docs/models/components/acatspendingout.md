# AcatsPendingOut

Used to record the movement of funds or shares to/ from the pending_acats memo location

## Example Usage

```typescript
import { AcatsPendingOut } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcatsPendingOut = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `acatsControlNumber`                            | *string*                                        | :heavy_minus_sign:                              | the unique transfer Identifier assigned by NSCC | 20240360002172                                  |
| `additionalInstructions`                        | *string*                                        | :heavy_minus_sign:                              | Free form text field                            | ACATS instruction                               |