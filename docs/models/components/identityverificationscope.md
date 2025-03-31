# IdentityVerificationScope

Used to determine who is responsible for running identity verification checks

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