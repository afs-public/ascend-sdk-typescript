# IdentityLookupDeviceType

The type of device (e.g., mobile, desktop, tablet)

## Example Usage

```typescript
import { IdentityLookupDeviceType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentityLookupDeviceType = IdentityLookupDeviceType.Mobile;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `DeviceTypeUnspecified` | DEVICE_TYPE_UNSPECIFIED |
| `Desktop`               | DESKTOP                 |
| `Mobile`                | MOBILE                  |
| `Tablet`                | TABLET                  |
| -                       | `Unrecognized<string>`  |