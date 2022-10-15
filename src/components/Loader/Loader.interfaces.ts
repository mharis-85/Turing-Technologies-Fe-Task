import { SlidingCubeProps } from "react-loaders-kit/lib/slidingCube/SlidingCubeLoader"
import { Optional } from "../Table/Table.interfaces"

export interface LoaderProps extends Optional<SlidingCubeProps, "loading"> {}
