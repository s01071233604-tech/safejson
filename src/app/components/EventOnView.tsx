"use client";

import { useEffect } from "react";
import { trackEvent } from "./analytics";

type EventOnViewProps = {
  name: string;
  params?: Record<string, string | number | boolean | undefined>;
};

export default function EventOnView({ name, params }: EventOnViewProps) {
  useEffect(() => {
    trackEvent(name, params);
  }, [name, params]);

  return null;
}
