'use client';

import { useRouter } from "next/navigation";

export default function Error({ error, reset }:
    { error: Error; reset: () => void }
) {
  const router = useRouter();

  return (
    <div>
      <h2>Error occurred</h2>

      <button onClick={reset}>Retry</button>

      <button onClick={() => router.refresh()}>
        Refresh Page 🔄
      </button>
    </div>
  );
}