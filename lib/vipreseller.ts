import crypto from "crypto";

const VIP_URL =
  "https://vip-reseller.co.id/api/game-feature";

export async function createVipOrder({
  productCode,
  userId,
  zoneId,
  additionalData,
}: {
  productCode: string;
  userId: string;
  zoneId?: string | null;
  additionalData?: string | null;
}) {

  const apiId = process.env.VIP_ID;
  const apiKey = process.env.VIP_KEY;

  if (!apiId || !apiKey) {
    throw new Error(
      "VIP_ID atau VIP_KEY belum diisi pada file .env"
    );
  }

  const sign = crypto
    .createHash("md5")
    .update(apiId + apiKey)
    .digest("hex");

  const formData = new URLSearchParams();

  formData.append(
    "key",
    apiKey
  );

  formData.append(
    "sign",
    sign
  );

  formData.append(
    "type",
    "order"
  );

  formData.append(
    "service",
    productCode
  );

  formData.append(
    "data_no",
    userId
  );

  if (zoneId) {
    formData.append(
      "data_zone",
      zoneId
    );
  }

  if (additionalData) {
    formData.append(
      "post_additional_data",
      additionalData
    );
  }

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000);

  try {

    const response = await fetch(
      VIP_URL,
      {
        method: "POST",
        body: formData,
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(
        `VIP API Error: ${response.status}`
      );
    }

    const vipResponse = await response.json();

    return vipResponse;

  } catch (error) {

    clearTimeout(timeout);

    throw error;

  }

}

export async function checkNickname({
  code,
  target,
  additionalTarget,
}: {
  code: string;
  target: string;
  additionalTarget?: string;
}) {

  const apiId = process.env.VIP_ID;
  const apiKey = process.env.VIP_KEY;

  if (!apiId || !apiKey) {
    throw new Error("VIP_ID atau VIP_KEY belum diisi.");
  }

  const sign = crypto
    .createHash("md5")
    .update(apiId + apiKey)
    .digest("hex");

  const formData = new URLSearchParams();

  formData.append("key", apiKey);
  formData.append("sign", sign);
  formData.append("type", "get-nickname");
  formData.append("code", code);
  formData.append("target", target);

  if (additionalTarget) {
    formData.append("additional_target", additionalTarget);
  }

  const res = await fetch(VIP_URL, {
    method: "POST",
    body: formData,
  });

  return await res.json();

}