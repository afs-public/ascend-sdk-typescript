# FpslEnrollmentMetadata

Metadata for the FULLY_PAID_STOCK_LENDING enrollment type

## Example Usage

```typescript
import { FpslEnrollmentMetadata } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FpslEnrollmentMetadata = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `customerPercentage`                                                    | *number*                                                                | :heavy_minus_sign:                                                      | Customer Percentage for FPSL Enrollment.                                | 6.1                                                                     |
| `firmPercentage`                                                        | *number*                                                                | :heavy_minus_sign:                                                      | Firm Percentage for FPSL Enrollment.                                    | 3.7                                                                     |
| `fpslMslaMinimumRate`                                                   | *number*                                                                | :heavy_minus_sign:                                                      | FPSL MSLA minimum rate determines which MSLA split agreement to display | 1                                                                       |
| `introducingBrokerPercentage`                                           | *number*                                                                | :heavy_minus_sign:                                                      | Introducing Broker Percentage for FPSL Enrollment.                      | 44                                                                      |