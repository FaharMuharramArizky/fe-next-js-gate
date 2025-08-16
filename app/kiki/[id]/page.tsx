"use client";
import { useParams } from "next/navigation";

export default function KikiIdPage() {
  const { id } = useParams();
  return <>{id}</>;
}
