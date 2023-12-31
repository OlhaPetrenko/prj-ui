import React from "react";
import { Breadcrumb } from "semantic-ui-react";

interface IPrjBreadcrumbProps {}

const sections = [
  { key: "Home", content: "Home", link: true },
  { key: "Store", content: "Store", link: true },
  { key: "Shirt", content: "T-Shirt", active: true },
];

export const PrjBreadcrumb = () => {
  return <Breadcrumb icon="right angle" sections={sections} size="huge" />;
};
