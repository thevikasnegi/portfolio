"use client";

import { useState, useEffect, ReactElement } from "react";

interface IProps {
  htmlContent: string;
  element: ReactElement<any, any>
}
export default function SafeHTML({ htmlContent,  element}: IProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return element.type == "p" ? (
    <p {...element.props} dangerouslySetInnerHTML={{ __html: htmlContent }} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
