import immer from "immer";
import { ComposeSpecification, DefinitionsService } from "@typeswarm/cli";

//TODO: Rename this file

//TODO: Rename this interface
export interface ExampleOptions {
    image?: string;
    tag?: string;
}

//TODO: Rename this function

//This is a package function. It returns a whole ComposeSpecification,
//which may contain services, volumes, networks, secrets and configs.
//In your code you can merge it with your configuration using `mergeComposeConfigurations`
//function.
export const Example = ({
    image = "containous/whoami",
    tag = "v1.5.0",
}: ExampleOptions): ComposeSpecification => {
    const spec: ComposeSpecification = {
        services: {
            someService: {
                image: `${image}:${tag}`,
                ports: [
                    {
                        target: 80,
                        published: 8080,
                    },
                ],
            },
        },
    };

    return spec;
};

//TODO: rename this function
//This is another example - a plugin which takes a service definition and
//returns another service definition with some properties added
export const examplePlugin = (
    service: DefinitionsService
): DefinitionsService => {
    return immer(service, (service: DefinitionsService) => {
        //You can mutate service here, the result returned from
        //`immer` function will be a new copy of the input object

        //For example, you can add some environment variable,
        //forward a port, add volumes, networks, etc.
        if (!service.environment) {
            service.environment = {};
        }
        if (Array.isArray(service.environment)) {
            throw new Error("service.environment should be an object");
        }
        service.environment.FOO = "bar";
    });
};
