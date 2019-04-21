import { join } from "lodash";
import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>Hello from {join([props.compiler, props.framework], "and")} !</h1>
);
