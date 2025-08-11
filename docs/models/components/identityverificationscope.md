# IdentityVerificationScope

Used to determine who is responsible for running identity verification checks, one of:
- `IDENTITY_VERIFICATION_SCOPE_UNSPECIFIED` - Default/Null value.
- `PERFORMED_BY_APEX` - Run CIP and CDD checks.
- `PROVIDED_BY_CLIENT` - Run CDD checks with CIP provided in request.

## Example Usage

```typescript
import { IdentityVerificationScope } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentityVerificationScope =
  IdentityVerificationScope.ProvidedByClient;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                    | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `IdentityVerificationScopeUnspecified`  | IDENTITY_VERIFICATION_SCOPE_UNSPECIFIED |
| `PerformedByApex`                       | PERFORMED_BY_APEX                       |
| `ProvidedByClient`                      | PROVIDED_BY_CLIENT                      |
| -                                       | `Unrecognized<string>`                  |