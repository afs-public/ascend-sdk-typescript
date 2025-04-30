# EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails

Information about the related politically exposed persons

## Example Usage

```typescript
import { EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails =
  {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `directOrIndirectRelatedPeps`                                                                         | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Indication as to whether or not an account has direct or indirect related politically exposed persons | true                                                                                                  |
| `relatedPeps`                                                                                         | [components.RelatedPep](../../models/components/relatedpep.md)[]                                      | :heavy_minus_sign:                                                                                    | Related Peps                                                                                          |                                                                                                       |