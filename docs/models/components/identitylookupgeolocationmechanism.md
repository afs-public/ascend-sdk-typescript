# IdentityLookupGeolocationMechanism

Method used to determine the end-user's device geolocation

## Example Usage

```typescript
import { IdentityLookupGeolocationMechanism } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentityLookupGeolocationMechanism =
  IdentityLookupGeolocationMechanism.IpLookup;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `GeolocationMechanismUnspecified` | GEOLOCATION_MECHANISM_UNSPECIFIED |
| `DeviceGps`                       | DEVICE_GPS                        |
| `IpLookup`                        | IP_LOOKUP                         |
| -                                 | `Unrecognized<string>`            |