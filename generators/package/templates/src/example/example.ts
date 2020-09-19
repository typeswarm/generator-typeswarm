import {
    ComposeSpecification,
    mergeComposeConfigurations,
} from "@typeswarm/cli";
import { Example } from "../Example";

let spec: ComposeSpecification = {
    version: "3.7",
};

spec = mergeComposeConfigurations(spec, Example({}));

export { spec };
