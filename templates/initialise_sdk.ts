function initializeSdk(): Apexascend {
  const apexClientCredsJson =
    process.env["CLIENT_CREDENTIALS"] ??
    "boom - CLIENT_CREDENTIALS env var not set";
  const apexApisUrl =
    process.env["APEX_API_URL"] ?? "boom - APEX_API_URL env var not set";
  const apiKey = process.env["API_KEY"] ?? "boom - API_KEY env var not set";
  const securitySource = new ApexSecuritySource(
    apexClientCredsJson,
    apiKey,
    apexApisUrl
  );
  return new Apexascend({
    security: async (): Promise<Security> => securitySource.getSecurity(),
    serverURL: apexApisUrl,
  });
}

config({ path: "./v1/.env" });
const apexascend = initializeSdk();
console.log("Example: start");
run().then(_ => console.log("Example: finished"));
