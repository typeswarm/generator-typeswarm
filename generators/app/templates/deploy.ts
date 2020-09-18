import { ComposeSpecification } from "@typeswarm/cli";

function err(m: string): never {
    throw new Error(m);
}

const spec: ComposeSpecification = {
    version: "3.7",
    services: {
        // A simple web-server echoing a container information.
        // You can replace this service definition with whatever.
        //
        // The schema of ComposeSpecification object is the same
        // as of docker-compose.yaml file you would normally write.
        whoami: {
            image: "containous/whoami:v1.5.0",
            ports: [
                {
                    published: 8080,
                    target: 80,
                },
            ],
            deploy: {
                labels: {
                    //An environment variable is used for demonstration purposes.
                    //You can tell TypeSwarm to use environment variables form file
                    //using -e (--envFile) option
                    "my.label": process.env.HELLO ?? err("process.env.HELLO"),
                },
            },
        },
    },
};

export { spec };
