# Geolocation

Geographic location coordinates of the end-user's device

## Example Usage

```typescript
import { Geolocation } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Geolocation = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `latitude`                                                          | *number*                                                            | :heavy_minus_sign:                                                  | The latitude in degrees. It must be in the range [-90.0, +90.0].    |
| `longitude`                                                         | *number*                                                            | :heavy_minus_sign:                                                  | The longitude in degrees. It must be in the range [-180.0, +180.0]. |