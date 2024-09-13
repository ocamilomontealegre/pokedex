import { z } from "zod";

const envSchema = z.object({
  VITE_APP_PORT: z.preprocess((val) => Number(val), z.number()),
  VITE_POKEAPI_URL: z.string().url(),
  VITE_AXIOS_TIMEOUT: z.preprocess((val) => Number(val), z.number()),
});

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error(`Invalid environment variables ${JSON.stringify(parsedEnv.error.format())}`);
  throw new Error("Invalid environment variables");
}

export const envConfig = {
  appPort: parsedEnv.data.VITE_APP_PORT,
  pokeApiUrl: parsedEnv.data.VITE_POKEAPI_URL,
  axiosTimeout: parsedEnv.data.VITE_AXIOS_TIMEOUT,
};
