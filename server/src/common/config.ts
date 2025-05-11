import 'dotenv/config';

export const getConfig = () => {
  const { env } = process;

  return {
    env: env.NODE_ENV,
    port: env.PORT || 3000,
    database: {
      postgresql: {
        username: env.POSTGRES_USERNAME,
        password: env.POSTGRES_PASSWORD,
        database: env.POSTGRES_DATABASE,
        host: env.POSTGRES_HOST,
        port: +env.POSTGRES_PORT,
      },
    },
  };
};
