# PreviewTransferResponse

PreviewTransferResponse is the previewed transfer for one linked account: the contra-broker account, the holdings sorted into eligible and ineligible (with reasons), and any transfer- or account-level conditions. It carries everything needed to prefill a transfer, so a separate holdings fetch isn't required.

 There is no aggregate verdict — whether to proceed, or nudge the investor to fix the transfer, is the caller's decision.

## Example Usage

```typescript
import { PreviewTransferResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PreviewTransferResponse = {};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `eligible`                                                                                                                                      | [components.Holding](../../models/components/holding.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                              | Holdings that can transfer as-is.                                                                                                               |
| `externalAccount`                                                                                                                               | [components.AcatsPreviewTransferExternalAccount](../../models/components/acatspreviewtransferexternalaccount.md)                                | :heavy_minus_sign:                                                                                                                              | The contra-broker account the holdings are transferring from, ready to use as the delivering party of a transfer.                               |
| `ineligible`                                                                                                                                    | [components.IneligibleHolding](../../models/components/ineligibleholding.md)[]                                                                  | :heavy_minus_sign:                                                                                                                              | Holdings that cannot transfer, each with the reason(s) why.                                                                                     |
| `transferConditions`                                                                                                                            | [components.AcatsTransferCondition](../../models/components/acatstransfercondition.md)[]                                                        | :heavy_minus_sign:                                                                                                                              | Conditions affecting the transfer or account as a whole (not tied to a single holding), e.g. a margin review or the receiving account's status. |