import { NextResponse } from "next/server";

const MOCK_DEALS = [
  {
    id: "chair",
    title: "Ergo Chair",
    description: "Fully-adjustable ergonomic chair.",
    price: 249,
    discount: 30,
  },
  {
    id: "keyboard",
    title: "Mechanical Keyboard",
    description: "Gasket mount with hot-swap switches.",
    price: 159,
    discount: 20,
  },
  {
    id: "monitor",
    title: "Ultrawide Monitor",
    description: "34\" 1440p HDR display.",
    price: 499,
    discount: 15,
  },
  {
    id: "mouse",
    title: "Wireless Mouse",
    description: "Silent clicks, 70-day battery life.",
    price: 69,
    discount: 25,
  },
];

export async function GET() {
  return NextResponse.json(MOCK_DEALS);
}
