import { exportSchema } from "graphile-export";
import { makeSchema } from "postgraphile";
import config from "./graphile.config.mjs";

async function main() {
  const { schema } = await makeSchema(config);
  const exportFileLocation = `./exported-schema.mjs`;
  await exportSchema(schema, exportFileLocation, {
    mode: "graphql-js",
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
