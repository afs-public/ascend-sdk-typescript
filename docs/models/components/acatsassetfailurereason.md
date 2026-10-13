# AcatsAssetFailureReason

Machine-readable failure reason.

## Example Usage

```typescript
import { AcatsAssetFailureReason } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcatsAssetFailureReason = AcatsAssetFailureReason.AssetNotIdentified;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `ReasonUnspecified`               | REASON_UNSPECIFIED                |
| `AssetNotIdentified`              | ASSET_NOT_IDENTIFIED              |
| `AssetClassNotPermitted`          | ASSET_CLASS_NOT_PERMITTED         |
| `MutualFundNotTransferEligible`   | MUTUAL_FUND_NOT_TRANSFER_ELIGIBLE |
| `OptionsTradingNotEnrolled`       | OPTIONS_TRADING_NOT_ENROLLED      |
| `OptionNotTradable`               | OPTION_NOT_TRADABLE               |
| `OptionExpiresTooSoon`            | OPTION_EXPIRES_TOO_SOON           |
| -                                 | `Unrecognized<string>`            |