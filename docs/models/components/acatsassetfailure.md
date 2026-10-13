# AcatsAssetFailure

AcatsAssetFailure is one reason a specific holding can't transfer.

## Example Usage

```typescript
import { AcatsAssetFailure } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcatsAssetFailure = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `message`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | Human-readable explanation.                                                              | Asset could not be identified in the Apex catalog.                                       |
| `reason`                                                                                 | [components.AcatsAssetFailureReason](../../models/components/acatsassetfailurereason.md) | :heavy_minus_sign:                                                                       | Machine-readable failure reason.                                                         | ASSET_NOT_IDENTIFIED                                                                     |