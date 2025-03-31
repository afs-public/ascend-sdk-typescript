# AgreementSource

An internal indicator from where the agreement was generated; Typically `ACCOUNTS_SERVICE` if accessing our public APIs

## Example Usage

```typescript
import { AgreementSource } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AgreementSource = AgreementSource.AccountsService;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `AgreementSourceUnspecified` | AGREEMENT_SOURCE_UNSPECIFIED |
| `AtlasForm`                  | ATLAS_FORM                   |
| `OtherSource`                | OTHER_SOURCE                 |
| `AccountsService`            | ACCOUNTS_SERVICE             |
| -                            | `Unrecognized<string>`       |