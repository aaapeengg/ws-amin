import crypto from "crypto";

const VIP_URL =
  "https://vip-reseller.co.id/api/game-feature";

export async function checkVipStatus(
  trxid: string
) {

  const apiId = process.env.VIP_ID!;
  const apiKey = process.env.VIP_KEY!;

  const sign = crypto
    .createHash("md5")
    .update(apiId + apiKey)
    .digest("hex");

  const formData = new URLSearchParams();

  formData.append("key", apiKey);
  formData.append("sign", sign);
  formData.append("type", "status");
  formData.append("trxid", trxid);

  const response = await fetch(
    VIP_URL,
    {
      method: "POST",
      body: formData,
    }
  );

  return response.json();

}