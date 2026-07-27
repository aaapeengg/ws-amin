export function generateOrderId() {
  const now = new Date();

  const date =
    now.getFullYear() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0");


  const random =
    Math.floor(Math.random() * 90000) + 10000;


  return `WS-${date}-${random}`;
}