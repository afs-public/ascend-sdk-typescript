# RetirementConstraintsRetrieveDistributionConstraintsResponse

## Example Usage

```typescript
import { RetirementConstraintsRetrieveDistributionConstraintsResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: RetirementConstraintsRetrieveDistributionConstraintsResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `distributionConstraints`                                                                | [components.DistributionConstraints](../../models/components/distributionconstraints.md) | :heavy_minus_sign:                                                                       | OK                                                                                       |
| `status`                                                                                 | [components.Status](../../models/components/status.md)                                   | :heavy_minus_sign:                                                                       | INVALID_ARGUMENT: The request has an invalid argument.                                   |